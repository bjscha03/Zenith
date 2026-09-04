import type { Config } from '@netlify/functions';
import { buildInternalNotification, buildVisitorConfirmation } from './_shared/email-templates.mts';
import { cleanChoice, cleanEmail, cleanText, PublicFormError } from './_shared/form-security.mts';
import { createFormHandler, type FormDefinition } from './_shared/form-runtime.mts';

const RSVP_OPTIONS = ['attend', 'attend-with-guest', 'decline'] as const;

type RsvpResponse = typeof RSVP_OPTIONS[number];

interface HolidayRsvp {
  name: string;
  email: string;
  company: string;
  response: RsvpResponse;
  guestName: string;
}

const responseLabel = (response: RsvpResponse) => {
  if (response === 'attend-with-guest') return 'Will attend and bring a guest';
  if (response === 'decline') return 'Will not attend';
  return 'Will attend';
};

const formatTimestamp = (date: Date) => new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/Chicago',
  timeZoneName: 'short',
}).format(date);

const holidayRsvpDefinition: FormDefinition<HolidayRsvp> = {
  formType: 'holiday-rsvp',
  normalize: (input) => {
    const response = cleanChoice(input.response, 'RSVP option', RSVP_OPTIONS, true) as RsvpResponse;
    const guestName = cleanText(input.guestName, 'your guest name', { max: 160 });

    if (response === 'attend-with-guest' && !guestName) {
      throw new PublicFormError(400, 'Please enter your guest’s name.', 'missing_guest_name');
    }

    return {
      name: cleanText(input.name, 'your name', { required: true, max: 160 }),
      email: cleanEmail(input.email),
      company: cleanText(input.company, 'company or organization', { max: 180 }),
      response,
      guestName: response === 'attend-with-guest' ? guestName : '',
    };
  },
  visitorEmail: (data) => data.email,
  persist: async (sql, data) => {
    await sql`
      CREATE TABLE IF NOT EXISTS holiday_event_rsvps (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        company TEXT,
        response TEXT NOT NULL,
        guest_name TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO holiday_event_rsvps (name, email, company, response, guest_name)
      VALUES (${data.name}, ${data.email}, ${data.company || null}, ${data.response}, ${data.guestName || null})
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        company = EXCLUDED.company,
        response = EXCLUDED.response,
        guest_name = EXCLUDED.guest_name,
        updated_at = NOW()
    `;
  },
  buildMessages: (data, config, timestamp) => {
    const answer = responseLabel(data.response);
    const attending = data.response !== 'decline';

    return [
      buildInternalNotification({
        to: config.notificationTo,
        replyTo: data.email,
        subject: `Holiday Celebration RSVP — ${answer} — ${data.name}`,
        title: 'Zenith Holiday Celebration RSVP',
        source: 'Events — Zenith Holiday Celebration — Dec. 11, 2026',
        timestamp: formatTimestamp(timestamp),
        fields: [
          { label: 'Name', value: data.name },
          { label: 'Email', value: data.email },
          { label: 'Company / organization', value: data.company },
          { label: 'RSVP', value: answer },
          { label: 'Guest name', value: data.guestName },
          { label: 'Event', value: 'Friday, December 11, 2026 — Evening — Austin, TX' },
        ],
      }),
      buildVisitorConfirmation({
        to: data.email,
        replyTo: config.publicReplyTo,
        subject: 'Your Zenith Holiday Celebration RSVP',
        title: attending ? 'Your RSVP is confirmed' : 'Your RSVP has been received',
        greetingName: data.name,
        message: attending
          ? `Thank you for replying to the Zenith Holiday Celebration. We have you down as: ${answer}.${data.guestName ? ` Guest: ${data.guestName}.` : ''} The celebration is Friday, December 11, 2026 in Austin, Texas. Evening time and location details will follow.`
          : 'Thank you for letting us know. We have recorded that you will not be attending the Zenith Holiday Celebration on Friday, December 11, 2026.',
        note: 'If your plans change, you can submit the RSVP form again using the same email address and your latest response will replace the previous one.',
      }),
    ];
  },
};

export default createFormHandler(holidayRsvpDefinition);

export const config: Config = {
  path: '/api/holiday-rsvp',
};
