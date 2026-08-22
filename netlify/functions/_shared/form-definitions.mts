import { buildInternalNotification, buildVisitorConfirmation } from './email-templates.mts';
import { cleanChoice, cleanEmail, cleanOptionalUrl, cleanText } from './form-security.mts';
import type { EmailRuntimeConfig, FormDefinition } from './form-runtime.mts';

const CONTACT_ROLES = ['Employer', 'Broker', 'Captive', 'Strategic Partner', 'Investor'] as const;
const CALL_ROLES = ['Advisor', 'Health Plan', 'TPA', 'Insurer', 'Employer Group'] as const;

const formatTimestamp = (date: Date) => new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/Chicago',
  timeZoneName: 'short',
}).format(date);

const fullName = (firstName: string, lastName: string) => `${firstName} ${lastName}`;

interface ContactInquiry {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  message: string;
}

export const contactInquiryDefinition: FormDefinition<ContactInquiry> = {
  formType: 'contact-inquiry',
  normalize: (input) => ({
    firstName: cleanText(input.firstName, 'your first name', { required: true, max: 80 }),
    lastName: cleanText(input.lastName, 'your last name', { required: true, max: 80 }),
    email: cleanEmail(input.email, 'a valid work email address'),
    role: cleanChoice(input.role, 'role', CONTACT_ROLES, true),
    message: cleanText(input.message, 'your message', { max: 5_000 }),
  }),
  visitorEmail: (data) => data.email,
  persist: (sql, data) => sql`
    INSERT INTO contact_inquiries (first_name, last_name, email, role, message)
    VALUES (${data.firstName}, ${data.lastName}, ${data.email}, ${data.role}, ${data.message || null})
  `,
  buildMessages: (data, config, timestamp) => [
    buildInternalNotification({
      to: config.notificationTo,
      replyTo: data.email,
      subject: `New website inquiry — ${fullName(data.firstName, data.lastName)}`,
      title: 'New Contact Inquiry',
      source: 'Contact page — Inquiry Form',
      timestamp: formatTimestamp(timestamp),
      fields: [
        { label: 'Name', value: fullName(data.firstName, data.lastName) },
        { label: 'Email', value: data.email },
        { label: 'Role', value: data.role },
        { label: 'Message', value: data.message },
      ],
    }),
    buildVisitorConfirmation({
      to: data.email,
      replyTo: config.publicReplyTo,
      subject: 'We received your Zenith inquiry',
      title: 'Your inquiry has been received',
      greetingName: data.firstName,
      message: 'Thank you for contacting Zenith Risk Strategies. Our team has received your inquiry and will review it before following up.',
      note: 'You can reply to this email if you need to add anything to your inquiry.',
    }),
  ],
};

interface ScheduleCall {
  name: string;
  companyName: string;
  whoYouAre: string;
  phone: string;
  email: string;
  companySize: string;
}

export const scheduleCallDefinition: FormDefinition<ScheduleCall> = {
  formType: 'schedule-call',
  normalize: (input) => ({
    name: cleanText(input.name, 'your name', { required: true, max: 160 }),
    companyName: cleanText(input.companyName, 'company name', { max: 180 }),
    whoYouAre: cleanChoice(input.whoYouAre, 'role', CALL_ROLES),
    phone: cleanText(input.phone, 'phone number', { max: 40 }),
    email: cleanEmail(input.email),
    companySize: cleanText(input.companySize, 'company size', { max: 80 }),
  }),
  visitorEmail: (data) => data.email,
  persist: (sql, data) => sql`
    INSERT INTO schedule_calls (name, company_name, who_you_are, phone, email, company_size)
    VALUES (${data.name}, ${data.companyName || null}, ${data.whoYouAre || null}, ${data.phone || null}, ${data.email}, ${data.companySize || null})
  `,
  buildMessages: (data, config, timestamp) => [
    buildInternalNotification({
      to: config.notificationTo,
      replyTo: data.email,
      subject: `New call request — ${data.name}`,
      title: 'New Schedule-a-Call Request',
      source: 'Contact page — Schedule a Call',
      timestamp: formatTimestamp(timestamp),
      fields: [
        { label: 'Name', value: data.name },
        { label: 'Company', value: data.companyName },
        { label: 'Role', value: data.whoYouAre },
        { label: 'Phone', value: data.phone },
        { label: 'Email', value: data.email },
        { label: 'Company size', value: data.companySize },
      ],
    }),
    buildVisitorConfirmation({
      to: data.email,
      replyTo: config.publicReplyTo,
      subject: 'Your Zenith call request was received',
      title: 'We received your call request',
      greetingName: data.name,
      message: 'Thank you for reaching out. The Zenith team has received your request and will contact you to coordinate the conversation.',
      note: 'Reply to this email if there is anything else you would like our team to know before the call.',
    }),
  ],
};

interface SpeakerApplication {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  expertise: string;
  perspective: string;
  linkedin: string;
}

export const speakerApplicationDefinition: FormDefinition<SpeakerApplication> = {
  formType: 'speaker-application',
  normalize: (input) => ({
    firstName: cleanText(input.firstName, 'your first name', { required: true, max: 80 }),
    lastName: cleanText(input.lastName, 'your last name', { required: true, max: 80 }),
    company: cleanText(input.company, 'your company', { required: true, max: 180 }),
    title: cleanText(input.title, 'your title or role', { required: true, max: 180 }),
    email: cleanEmail(input.email),
    phone: cleanText(input.phone, 'your phone number', { required: true, max: 40 }),
    expertise: cleanText(input.expertise, 'area of expertise', { max: 3_000 }),
    perspective: cleanText(input.perspective, 'experience or perspective', { max: 5_000 }),
    linkedin: cleanOptionalUrl(input.linkedin, 'LinkedIn URL'),
  }),
  visitorEmail: (data) => data.email,
  persist: (sql, data) => sql`
    INSERT INTO speaker_applications (first_name, last_name, company, title, email, phone, expertise, perspective, linkedin)
    VALUES (${data.firstName}, ${data.lastName}, ${data.company}, ${data.title}, ${data.email}, ${data.phone}, ${data.expertise || null}, ${data.perspective || null}, ${data.linkedin || null})
  `,
  buildMessages: (data, config, timestamp) => [
    buildInternalNotification({
      to: config.notificationTo,
      replyTo: data.email,
      subject: `New speaker application — ${fullName(data.firstName, data.lastName)}`,
      title: 'New Speaker Application',
      source: 'Events — Speaker Application',
      timestamp: formatTimestamp(timestamp),
      fields: [
        { label: 'Name', value: fullName(data.firstName, data.lastName) },
        { label: 'Company', value: data.company },
        { label: 'Title / role', value: data.title },
        { label: 'Email', value: data.email },
        { label: 'Phone', value: data.phone },
        { label: 'Expertise', value: data.expertise },
        { label: 'Perspective', value: data.perspective },
        { label: 'LinkedIn', value: data.linkedin },
      ],
    }),
    buildVisitorConfirmation({
      to: data.email,
      replyTo: config.publicReplyTo,
      subject: 'Zenith speaker application received',
      title: 'Your application has been received',
      greetingName: data.firstName,
      message: 'Thank you for your interest in contributing to a Zenith event. Our team has received your information and will review it.',
      note: 'This confirmation does not indicate acceptance. The Zenith team will follow up separately if there is a fit for an upcoming event.',
    }),
  ],
};

interface BrochureRequest {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  brochureType: 'apollo';
}

export const brochureRequestDefinition: FormDefinition<BrochureRequest> = {
  formType: 'brochure-request',
  normalize: (input) => ({
    firstName: cleanText(input.firstName, 'your first name', { required: true, max: 80 }),
    lastName: cleanText(input.lastName, 'your last name', { required: true, max: 80 }),
    email: cleanEmail(input.email, 'a valid work email address'),
    company: cleanText(input.company, 'your company', { required: true, max: 180 }),
    brochureType: 'apollo',
  }),
  visitorEmail: (data) => data.email,
  persist: (sql, data) => sql`
    INSERT INTO brochure_requests (first_name, last_name, email, company, brochure_type)
    VALUES (${data.firstName}, ${data.lastName}, ${data.email}, ${data.company}, ${data.brochureType})
  `,
  buildMessages: (data, config, timestamp) => {
    const brochureUrl = `${config.siteUrl}/brochures/mechanics-of-apollo-lf-captive-program.pptx`;
    return [
      buildInternalNotification({
        to: config.notificationTo,
        replyTo: data.email,
        subject: `New Apollo brochure request — ${fullName(data.firstName, data.lastName)}`,
        title: 'New Apollo Brochure Request',
        source: 'Apollo Health Plan — Brochure Request',
        timestamp: formatTimestamp(timestamp),
        fields: [
          { label: 'Name', value: fullName(data.firstName, data.lastName) },
          { label: 'Company', value: data.company },
          { label: 'Email', value: data.email },
          { label: 'Resource', value: 'Mechanics of Apollo LF Captive Program' },
        ],
      }),
      buildVisitorConfirmation({
        to: data.email,
        replyTo: config.publicReplyTo,
        subject: 'Your Apollo Health Plan brochure',
        title: 'Your requested Apollo brochure',
        greetingName: data.firstName,
        message: 'Thank you for your interest in the Apollo Health Plan. Use the link below to access the requested brochure.',
        cta: { label: 'Download the Apollo brochure', url: brochureUrl },
        note: 'If you would like to discuss how the program could fit your organization, reply to this email and the Zenith team will follow up.',
      }),
    ];
  },
};

interface NewsletterSubscription {
  email: string;
}

export const newsletterSubscriptionDefinition: FormDefinition<NewsletterSubscription> = {
  formType: 'newsletter-subscribe',
  normalize: (input) => ({ email: cleanEmail(input.email, 'a valid work email address') }),
  visitorEmail: (data) => data.email,
  persist: (sql, data) => sql`
    INSERT INTO newsletter_subscribers (email)
    VALUES (${data.email})
    ON CONFLICT (email) DO NOTHING
  `,
  buildMessages: (data, config, timestamp) => [
    buildInternalNotification({
      to: config.notificationTo,
      replyTo: data.email,
      subject: `New newsletter subscriber — ${data.email}`,
      title: 'New Newsletter Subscription',
      source: 'Resources page — Stay Ahead of the Risk Curve',
      timestamp: formatTimestamp(timestamp),
      fields: [{ label: 'Email', value: data.email }],
    }),
    buildVisitorConfirmation({
      to: data.email,
      replyTo: config.publicReplyTo,
      subject: 'You’re subscribed to Zenith insights',
      title: 'Subscription confirmed',
      greetingName: 'there',
      message: 'You are now subscribed to receive Zenith Risk Strategies insights and updates.',
      note: 'Reply to this email if you need help with your subscription.',
    }),
  ],
};
