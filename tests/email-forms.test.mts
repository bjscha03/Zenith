import assert from 'node:assert/strict';
import test from 'node:test';
import type { Context } from '@netlify/functions';
import type { OutboundEmail } from '../netlify/functions/_shared/email-templates.mts';
import {
  brochureRequestDefinition,
  contactInquiryDefinition,
  newsletterSubscriptionDefinition,
  scheduleCallDefinition,
  speakerApplicationDefinition,
} from '../netlify/functions/_shared/form-definitions.mts';
import {
  createFormHandler,
  type EmailRuntimeConfig,
  type FormDefinition,
} from '../netlify/functions/_shared/form-runtime.mts';

const ORIGIN = 'https://deploy-preview-42--zenithdevelopment.netlify.app';
const TEST_CONFIG: EmailRuntimeConfig = {
  fromName: 'Zenith Risk Strategies',
  fromAddress: 'onboarding@resend.dev',
  notificationTo: ['twagner@zenithriskstrategies.com'],
  publicReplyTo: 'info@zenithriskstrategies.com',
  siteUrl: 'https://www.zenithriskstrategies.com',
};
const NOW = new Date('2026-08-22T15:30:00.000Z');
const context = { requestId: 'request_123456789' } as Context;
const silentLogger = { info() {}, warn() {}, error() {} };

const makeRequest = (
  payload: Record<string, unknown>,
  options: { origin?: string; submissionId?: string } = {},
) => new Request(`${ORIGIN}/api/form`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Origin: options.origin ?? ORIGIN,
    'X-Submission-Id': options.submissionId ?? 'submission_123456789',
  },
  body: JSON.stringify(payload),
});

const validCases: Array<{
  name: string;
  definition: FormDefinition<any>;
  payload: Record<string, unknown>;
  visitorEmail: string;
}> = [
  {
    name: 'contact inquiry',
    definition: contactInquiryDefinition,
    payload: { firstName: 'Jane', lastName: 'Doe', email: 'JANE@example.com', role: 'Employer', message: 'Please contact me.' },
    visitorEmail: 'jane@example.com',
  },
  {
    name: 'schedule a call',
    definition: scheduleCallDefinition,
    payload: { name: 'Alex Smith', companyName: 'Example Co', whoYouAre: 'Advisor', phone: '555-0100', email: 'alex@example.com', companySize: '250' },
    visitorEmail: 'alex@example.com',
  },
  {
    name: 'speaker application',
    definition: speakerApplicationDefinition,
    payload: { firstName: 'Taylor', lastName: 'Lee', company: 'Health Co', title: 'CEO', email: 'taylor@example.com', phone: '555-0101', expertise: 'Healthcare', perspective: 'Operator experience', linkedin: 'https://www.linkedin.com/in/taylor' },
    visitorEmail: 'taylor@example.com',
  },
  {
    name: 'brochure request',
    definition: brochureRequestDefinition,
    payload: { firstName: 'Sam', lastName: 'Jones', email: 'sam@example.com', company: 'Example Benefits', brochureType: 'apollo' },
    visitorEmail: 'sam@example.com',
  },
  {
    name: 'newsletter signup',
    definition: newsletterSubscriptionDefinition,
    payload: { email: 'reader@example.com' },
    visitorEmail: 'reader@example.com',
  },
];

for (const formCase of validCases) {
  test(`${formCase.name} persists first and prepares internal plus visitor email`, async () => {
    const events: string[] = [];
    let sent: OutboundEmail[] = [];
    const handler = createFormHandler(formCase.definition, {
      emailConfig: TEST_CONFIG,
      now: () => NOW,
      logger: silentLogger,
      saveSubmission: async () => {
        events.push('persist');
        return { status: 'created' };
      },
      deliverMessages: async (messages) => {
        events.push('email');
        sent = messages;
        return {
          acceptedKinds: messages.map(({ kind }) => kind),
          failedKinds: [],
          messageIds: messages.map((_, index) => `message_${index}`),
        };
      },
    });

    const response = await handler(makeRequest(formCase.payload), context);
    const body = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(events, ['persist', 'email']);
    assert.equal(body.emailStatus, 'accepted');
    assert.deepEqual(sent.map(({ kind }) => kind), ['internal', 'confirmation']);
    assert.deepEqual(sent[0].to, ['twagner@zenithriskstrategies.com']);
    assert.equal(sent[0].replyTo, formCase.visitorEmail);
    assert.equal(sent[1].to, formCase.visitorEmail);
    assert.equal(sent[1].replyTo, 'info@zenithriskstrategies.com');
  });
}

test('visitor content is escaped before it reaches an HTML email', async () => {
  let sent: OutboundEmail[] = [];
  const handler = createFormHandler(contactInquiryDefinition, {
    emailConfig: TEST_CONFIG,
    now: () => NOW,
    logger: silentLogger,
    saveSubmission: async () => ({ status: 'created' }),
    deliverMessages: async (messages) => {
      sent = messages;
      return { acceptedKinds: ['internal', 'confirmation'], failedKinds: [], messageIds: ['one', 'two'] };
    },
  });

  await handler(makeRequest({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    role: 'Employer',
    message: '<img src=x onerror="alert(1)">',
  }), context);

  assert.equal(sent[0].html.includes('<img src=x onerror='), false);
  assert.match(sent[0].html, /&lt;img src=x onerror=&quot;alert\(1\)&quot;&gt;/);
  assert.match(sent[0].html, /max-width:640px/);
  assert.match(sent[0].html, /5004 Bee Creek Rd, Suite 620, Spicewood, TX 78669/);
});

test('a Resend outage does not discard a persisted submission or expose the provider error', async () => {
  let persisted = false;
  const handler = createFormHandler(contactInquiryDefinition, {
    emailConfig: TEST_CONFIG,
    now: () => NOW,
    logger: silentLogger,
    saveSubmission: async () => {
      persisted = true;
      return { status: 'created' };
    },
    deliverMessages: async () => {
      throw new Error('secret provider stack trace');
    },
  });

  const response = await handler(makeRequest(validCases[0].payload), context);
  const responseText = await response.text();
  const body = JSON.parse(responseText);
  assert.equal(response.status, 200);
  assert.equal(persisted, true);
  assert.equal(body.success, true);
  assert.equal(body.emailStatus, 'failed');
  assert.equal(responseText.includes('secret provider stack trace'), false);
});

test('a database failure returns a safe error and does not attempt email', async () => {
  let emailAttempted = false;
  const handler = createFormHandler(contactInquiryDefinition, {
    emailConfig: TEST_CONFIG,
    logger: silentLogger,
    saveSubmission: async () => {
      throw new Error('database connection string and stack');
    },
    deliverMessages: async () => {
      emailAttempted = true;
      return { acceptedKinds: [], failedKinds: [], messageIds: [] };
    },
  });

  const response = await handler(makeRequest(validCases[0].payload), context);
  const responseText = await response.text();
  assert.equal(response.status, 503);
  assert.equal(emailAttempted, false);
  assert.equal(responseText.includes('connection string'), false);
});

test('a repeated submission ID is acknowledged without a second save or email', async () => {
  let emailAttempted = false;
  const handler = createFormHandler(contactInquiryDefinition, {
    emailConfig: TEST_CONFIG,
    logger: silentLogger,
    saveSubmission: async () => ({ status: 'duplicate' }),
    deliverMessages: async () => {
      emailAttempted = true;
      return { acceptedKinds: [], failedKinds: [], messageIds: [] };
    },
  });

  const response = await handler(makeRequest(validCases[0].payload), context);
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body.duplicate, true);
  assert.equal(emailAttempted, false);
});

test('the honeypot quietly discards obvious bot submissions', async () => {
  let persisted = false;
  const handler = createFormHandler(contactInquiryDefinition, {
    emailConfig: TEST_CONFIG,
    logger: silentLogger,
    saveSubmission: async () => {
      persisted = true;
      return { status: 'created' };
    },
  });

  const response = await handler(makeRequest({ ...validCases[0].payload, _website: 'spam.example' }), context);
  assert.equal(response.status, 200);
  assert.equal(persisted, false);
});

test('invalid origins and email addresses are rejected before persistence', async () => {
  let persisted = false;
  const handler = createFormHandler(contactInquiryDefinition, {
    emailConfig: TEST_CONFIG,
    logger: silentLogger,
    saveSubmission: async () => {
      persisted = true;
      return { status: 'created' };
    },
  });

  const crossOrigin = await handler(makeRequest(validCases[0].payload, { origin: 'https://attacker.example' }), context);
  const badEmail = await handler(makeRequest({ ...validCases[0].payload, email: 'not-an-email' }), context);
  assert.equal(crossOrigin.status, 403);
  assert.equal(badEmail.status, 400);
  assert.equal(persisted, false);
});
