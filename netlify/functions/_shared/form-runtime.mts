import { neon } from '@neondatabase/serverless';
import type { Context } from '@netlify/functions';
import { Resend } from 'resend';
import type { OutboundEmail, EmailKind } from './email-templates.mts';
import {
  PublicFormError,
  assertSameOrigin,
  isHoneypotFilled,
  jsonResponse,
  readJsonObject,
  submissionIdFrom,
} from './form-security.mts';

declare const Netlify: { env: { get: (key: string) => string | undefined } };

export type SqlClient = ReturnType<typeof neon>;

export interface EmailRuntimeConfig {
  fromName: string;
  fromAddress: string;
  notificationTo: string[];
  publicReplyTo: string;
  siteUrl: string;
}

export interface FormDefinition<T> {
  formType: string;
  normalize: (input: Record<string, unknown>) => T;
  visitorEmail: (data: T) => string;
  persist: (sql: SqlClient, data: T) => Promise<unknown>;
  buildMessages: (data: T, config: EmailRuntimeConfig, timestamp: Date) => OutboundEmail[];
}

interface DeliveryResult {
  acceptedKinds: EmailKind[];
  failedKinds: EmailKind[];
  messageIds: string[];
}

interface SaveResult {
  status: 'created' | 'duplicate';
}

interface SafeLogger {
  info: (...values: unknown[]) => void;
  warn: (...values: unknown[]) => void;
  error: (...values: unknown[]) => void;
}

export interface FormHandlerDependencies<T> {
  saveSubmission?: (data: T, submissionId: string, definition: FormDefinition<T>) => Promise<SaveResult>;
  deliverMessages?: (messages: OutboundEmail[], submissionId: string, formType: string, config: EmailRuntimeConfig) => Promise<DeliveryResult>;
  emailConfig?: EmailRuntimeConfig;
  now?: () => Date;
  logger?: SafeLogger;
}

const readEnv = (key: string) => Netlify.env.get(key)?.trim() || '';

const parseRecipients = (value: string) => value
  .split(',')
  .map((recipient) => recipient.trim().toLowerCase())
  .filter(Boolean);

export const getEmailRuntimeConfig = (): EmailRuntimeConfig => ({
  fromName: readEnv('EMAIL_FROM_NAME') || 'Zenith Risk Strategies',
  fromAddress: readEnv('EMAIL_FROM_ADDRESS') || 'onboarding@resend.dev',
  notificationTo: parseRecipients(readEnv('EMAIL_NOTIFICATION_TO') || 'twagner@zenithriskstrategies.com'),
  publicReplyTo: readEnv('EMAIL_PUBLIC_REPLY_TO') || 'info@zenithriskstrategies.com',
  siteUrl: (readEnv('EMAIL_SITE_URL') || 'https://www.zenithriskstrategies.com').replace(/\/$/, ''),
});

const saveSubmissionOnce = async <T,>(
  data: T,
  submissionId: string,
  definition: FormDefinition<T>,
): Promise<SaveResult> => {
  const databaseUrl = readEnv('DATABASE_URL');
  if (!databaseUrl) throw new Error('missing_database_configuration');
  const sql = neon(databaseUrl);
  const claim = await sql`
    INSERT INTO website_form_submissions (submission_id, form_type)
    VALUES (${submissionId}, ${definition.formType})
    ON CONFLICT (submission_id) DO NOTHING
    RETURNING submission_id
  `;

  if (claim.length === 0) return { status: 'duplicate' };

  try {
    await definition.persist(sql, data);
    return { status: 'created' };
  } catch (error) {
    await sql`DELETE FROM website_form_submissions WHERE submission_id = ${submissionId}`.catch(() => undefined);
    throw error;
  }
};

const safeErrorCode = (error: unknown) => {
  if (error && typeof error === 'object') {
    const named = error as { name?: unknown; code?: unknown; statusCode?: unknown };
    if (typeof named.code === 'string') return named.code.slice(0, 80);
    if (typeof named.name === 'string') return named.name.slice(0, 80);
    if (typeof named.statusCode === 'number') return `http_${named.statusCode}`;
  }
  return 'email_provider_error';
};

const deliverWithResend = async (
  messages: OutboundEmail[],
  submissionId: string,
  formType: string,
  config: EmailRuntimeConfig,
): Promise<DeliveryResult> => {
  const apiKey = readEnv('RESEND_API_KEY');
  if (!apiKey) {
    return { acceptedKinds: [], failedKinds: messages.map(({ kind }) => kind), messageIds: [] };
  }

  const resend = new Resend(apiKey);
  const acceptedKinds: EmailKind[] = [];
  const failedKinds: EmailKind[] = [];
  const messageIds: string[] = [];

  for (const message of messages) {
    try {
      const result = await resend.emails.send({
        from: `${config.fromName} <${config.fromAddress}>`,
        to: message.to,
        replyTo: message.replyTo,
        subject: message.subject,
        html: message.html,
        text: message.text,
      }, {
        idempotencyKey: `zenith-${formType}-${submissionId}-${message.kind}`.slice(0, 256),
      });

      if (result.error || !result.data?.id) throw result.error || new Error('missing_message_id');
      acceptedKinds.push(message.kind);
      messageIds.push(result.data.id);
      console.info('Zenith email delivery accepted', JSON.stringify({
        formType,
        messageKind: message.kind,
        messageId: result.data.id,
      }));
    } catch (error) {
      failedKinds.push(message.kind);
      console.warn('Zenith email delivery failed', {
        formType,
        messageKind: message.kind,
        errorCode: safeErrorCode(error),
      });
    }
  }

  return { acceptedKinds, failedKinds, messageIds };
};

const successBody = (delivery: DeliveryResult, duplicate = false, includeMessageIds = false) => ({
  success: true,
  duplicate,
  notificationSent: delivery.acceptedKinds.includes('internal'),
  confirmationSent: delivery.acceptedKinds.includes('confirmation'),
  emailStatus: duplicate
    ? 'duplicate'
    : delivery.failedKinds.length === 0
      ? 'accepted'
      : delivery.acceptedKinds.length > 0
        ? 'partial'
        : 'failed',
  ...(includeMessageIds ? { messageIds: delivery.messageIds } : {}),
});

export const createFormHandler = <T,>(
  definition: FormDefinition<T>,
  dependencies: FormHandlerDependencies<T> = {},
) => async (request: Request, context: Context): Promise<Response> => {
  const logger = dependencies.logger || console;
  const requestId = context.requestId || crypto.randomUUID();

  try {
    if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed.' }, 405);
    assertSameOrigin(request);
    const includeMessageIds = new URL(request.url).hostname.startsWith('deploy-preview-')
      && request.headers.get('X-Zenith-Email-Diagnostics') === 'preview';
    const input = await readJsonObject(request);

    if (isHoneypotFilled(input)) {
      logger.warn('Zenith form spam trap triggered', { formType: definition.formType, requestId });
      return jsonResponse({ success: true });
    }

    const data = definition.normalize(input);
    const submissionId = submissionIdFrom(request, requestId);
    const save = dependencies.saveSubmission || saveSubmissionOnce;
    const saved = await save(data, submissionId, definition);

    if (saved.status === 'duplicate') {
      logger.info('Zenith duplicate form submission suppressed', { formType: definition.formType, requestId });
      return jsonResponse(successBody({ acceptedKinds: [], failedKinds: [], messageIds: [] }, true));
    }

    const emailConfig = dependencies.emailConfig || getEmailRuntimeConfig();
    const timestamp = (dependencies.now || (() => new Date()))();
    const messages = definition.buildMessages(data, emailConfig, timestamp);
    const deliver = dependencies.deliverMessages || deliverWithResend;
    let delivery: DeliveryResult;

    try {
      delivery = await deliver(messages, submissionId, definition.formType, emailConfig);
    } catch (error) {
      delivery = { acceptedKinds: [], failedKinds: messages.map(({ kind }) => kind), messageIds: [] };
      logger.warn('Zenith email workflow failed after persistence', {
        formType: definition.formType,
        requestId,
        errorCode: safeErrorCode(error),
      });
    }

    logger.info('Zenith form submission completed', JSON.stringify({
      formType: definition.formType,
      requestId,
      emailStatus: successBody(delivery).emailStatus,
      messageIds: delivery.messageIds,
      timestamp: timestamp.toISOString(),
    }));
    return jsonResponse(successBody(delivery, false, includeMessageIds));
  } catch (error) {
    if (error instanceof PublicFormError) {
      logger.warn('Zenith form validation rejected', {
        formType: definition.formType,
        requestId,
        errorCode: error.code,
      });
      return jsonResponse({ error: error.publicMessage }, error.status);
    }

    logger.error('Zenith form persistence failed', {
      formType: definition.formType,
      requestId,
      errorCode: safeErrorCode(error),
    });
    return jsonResponse({ error: 'We could not save your submission. Please try again.' }, 503);
  }
};
