export type EmailKind = 'internal' | 'confirmation';

export interface OutboundEmail {
  kind: EmailKind;
  to: string | string[];
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}

export interface EmailField {
  label: string;
  value: string;
}

const LOGO_URL = 'https://res.cloudinary.com/dtrxl120u/image/upload/v1766602212/Zenith_Primary_Logo-1_teruwz_urxbr0.webp';
const OFFICE_ADDRESS = '5004 Bee Creek Rd, Suite 620, Spicewood, TX 78669';
const NAVY = '#0f172a';
const BLUE = '#16365d';

export const escapeHtml = (value: unknown) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const htmlText = (value: string) => escapeHtml(value).replace(/\r?\n/g, '<br>');

const renderShell = ({
  preheader,
  eyebrow,
  title,
  intro,
  content,
}: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro?: string;
  content: string;
}) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;color:${NAVY};font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f4f6f8;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border-top:6px solid ${BLUE};">
            <tr>
              <td style="padding:28px 36px 22px;border-bottom:1px solid #e5e7eb;">
                <img src="${LOGO_URL}" width="230" alt="Zenith Risk Strategies" style="display:block;width:230px;max-width:100%;height:auto;border:0;">
              </td>
            </tr>
            <tr>
              <td style="padding:36px 36px 40px;">
                <p style="margin:0 0 12px;color:#2563eb;font-size:11px;line-height:16px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${escapeHtml(eyebrow)}</p>
                <h1 style="margin:0;color:${NAVY};font-size:28px;line-height:36px;font-weight:700;">${escapeHtml(title)}</h1>
                ${intro ? `<p style="margin:18px 0 0;color:#475569;font-size:16px;line-height:26px;">${htmlText(intro)}</p>` : ''}
                ${content}
              </td>
            </tr>
            <tr>
              <td style="padding:25px 36px;background:${NAVY};color:#cbd5e1;">
                <p style="margin:0 0 7px;color:#ffffff;font-size:13px;line-height:20px;font-weight:700;">Zenith Risk Strategies</p>
                <p style="margin:0;font-size:12px;line-height:19px;">${OFFICE_ADDRESS}</p>
                <p style="margin:12px 0 0;font-size:11px;line-height:18px;color:#94a3b8;">Precision engineering for healthcare risk.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const buildInternalNotification = ({
  to,
  replyTo,
  subject,
  title,
  source,
  timestamp,
  fields,
}: {
  to: string[];
  replyTo: string;
  subject: string;
  title: string;
  source: string;
  timestamp: string;
  fields: EmailField[];
}): OutboundEmail => {
  const completeFields = [
    ...fields,
    { label: 'Form / source', value: source },
    { label: 'Submitted', value: timestamp },
  ];
  const rows = completeFields.map(({ label, value }) => `
    <tr>
      <td valign="top" style="width:150px;padding:13px 16px 13px 0;border-bottom:1px solid #e5e7eb;color:#64748b;font-size:12px;line-height:19px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">${escapeHtml(label)}</td>
      <td valign="top" style="padding:13px 0;border-bottom:1px solid #e5e7eb;color:${NAVY};font-size:15px;line-height:23px;word-break:break-word;">${htmlText(value || 'Not provided')}</td>
    </tr>`).join('');

  const html = renderShell({
    preheader: `${title} submitted through the Zenith website.`,
    eyebrow: 'Website notification',
    title,
    intro: 'The full submission is below. Reply to this email to respond directly to the visitor.',
    content: `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;margin-top:26px;border-top:1px solid #e5e7eb;">${rows}</table>`,
  });

  const text = [
    title,
    '',
    'Reply to this email to respond directly to the visitor.',
    '',
    ...completeFields.map(({ label, value }) => `${label}: ${value || 'Not provided'}`),
    '',
    `Zenith Risk Strategies — ${OFFICE_ADDRESS}`,
  ].join('\n');

  return { kind: 'internal', to, replyTo, subject, html, text };
};

export const buildVisitorConfirmation = ({
  to,
  replyTo,
  subject,
  title,
  greetingName,
  message,
  cta,
  note,
}: {
  to: string;
  replyTo: string;
  subject: string;
  title: string;
  greetingName: string;
  message: string;
  cta?: { label: string; url: string };
  note?: string;
}): OutboundEmail => {
  const button = cta ? `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:28px;">
      <tr>
        <td style="background:${BLUE};">
          <a href="${escapeHtml(cta.url)}" style="display:inline-block;padding:14px 22px;color:#ffffff;text-decoration:none;font-size:13px;line-height:18px;font-weight:700;letter-spacing:.5px;">${escapeHtml(cta.label)}</a>
        </td>
      </tr>
    </table>` : '';
  const noteHtml = note ? `<p style="margin:26px 0 0;padding-top:22px;border-top:1px solid #e5e7eb;color:#64748b;font-size:13px;line-height:21px;">${htmlText(note)}</p>` : '';
  const intro = `Hi ${greetingName},\n\n${message}`;
  const html = renderShell({
    preheader: subject,
    eyebrow: 'Confirmation',
    title,
    intro,
    content: `${button}${noteHtml}`,
  });
  const text = [
    `Hi ${greetingName},`,
    '',
    message,
    ...(cta ? ['', `${cta.label}: ${cta.url}`] : []),
    ...(note ? ['', note] : []),
    '',
    `Zenith Risk Strategies — ${OFFICE_ADDRESS}`,
  ].join('\n');

  return { kind: 'confirmation', to, replyTo, subject, html, text };
};
