/**
 * Zenith Risk Strategies — Shared Email Templates
 *
 * Reusable template functions for internal notification and customer
 * confirmation emails sent after successful form submissions.
 *
 * ---------------------------------------------------------------
 * SENDER ADDRESS
 * ---------------------------------------------------------------
 * Update the SENDER constant below when a verified Zenith domain
 * is configured in Resend.  Replace:
 *   "Zenith Risk Strategies <onboarding@resend.dev>"
 * with:
 *   "Zenith Risk Strategies <no-reply@zenithriskstrategies.com>"
 * ---------------------------------------------------------------
 */

const SENDER = "Zenith Risk Strategies <onboarding@resend.dev>";

const LOGO_URL =
  "https://res.cloudinary.com/dtrxl120u/image/upload/v1774984252/zenith_qhnpjr.png";

/* ------------------------------------------------------------------ */
/*  Utility helpers                                                    */
/* ------------------------------------------------------------------ */

function esc(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatTimestamp() {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "full",
    timeStyle: "short",
  });
}

/* ------------------------------------------------------------------ */
/*  Shared layout pieces                                               */
/* ------------------------------------------------------------------ */

function emailHeader() {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
<tr><td align="center" style="padding:30px 10px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;">

<!-- Logo -->
<tr><td align="center" style="padding:32px 20px 16px 20px;background-color:#ffffff;">
  <img src="${LOGO_URL}" alt="Zenith Risk Strategies" width="180" style="display:block;max-width:180px;height:auto;border:0;" />
</td></tr>

<!-- Divider -->
<tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e2e5e9;margin:0;" /></td></tr>
`;
}

function emailFooter() {
  const year = new Date().getFullYear();
  return `
<!-- Footer -->
<tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e2e5e9;margin:0;" /></td></tr>
<tr><td align="center" style="padding:20px 40px 30px 40px;color:#8a8f98;font-size:12px;line-height:18px;">
  &copy; ${year} Zenith Risk Strategies. All rights reserved.<br/>
  This is an automated message. Please do not reply directly to this email.
</td></tr>

</table>
</td></tr></table>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/*  Internal Notification Email                                        */
/* ------------------------------------------------------------------ */

/**
 * Renders the internal notification email sent to the Zenith team.
 *
 * @param {string} formType  – Human-readable form label, e.g. "Contact Inquiry"
 * @param {Array<{label:string, value:string}>} fields – Ordered list of
 *   field label/value pairs to display in the email body.
 * @returns {string} Complete HTML document string.
 */
function renderZenithInternalEmail(formType, fields) {
  const timestamp = formatTimestamp();

  let rows = "";
  for (const { label, value } of fields) {
    rows += `
<tr>
  <td style="padding:8px 12px;border-bottom:1px solid #f0f1f3;color:#5a5f69;font-size:13px;font-weight:600;white-space:nowrap;vertical-align:top;width:160px;">${esc(label)}</td>
  <td style="padding:8px 12px;border-bottom:1px solid #f0f1f3;color:#1a1d23;font-size:14px;vertical-align:top;">${esc(value || "N/A")}</td>
</tr>`;
  }

  return (
    emailHeader() +
    `
<!-- Heading -->
<tr><td style="padding:28px 40px 8px 40px;">
  <h1 style="margin:0;font-size:20px;color:#1a1d23;font-weight:700;">New ${esc(formType)}</h1>
  <p style="margin:6px 0 0 0;font-size:13px;color:#8a8f98;">Received ${esc(timestamp)}</p>
</td></tr>

<!-- Data table -->
<tr><td style="padding:16px 40px 28px 40px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e5e9;border-radius:6px;border-collapse:separate;overflow:hidden;">
${rows}
</table>
</td></tr>
` +
    emailFooter()
  );
}

/* ------------------------------------------------------------------ */
/*  Customer Confirmation Email                                        */
/* ------------------------------------------------------------------ */

/**
 * Renders the customer-facing confirmation email.
 *
 * @param {{ firstName?: string, name?: string }} data – Must contain at
 *   least one name field so the greeting can be personalized.
 * @returns {string} Complete HTML document string.
 */
function renderZenithCustomerEmail(data) {
  const name = data.firstName || data.name || "there";

  return (
    emailHeader() +
    `
<!-- Body -->
<tr><td style="padding:28px 40px 12px 40px;">
  <h1 style="margin:0;font-size:20px;color:#1a1d23;font-weight:700;">Thank you, ${esc(name)}!</h1>
</td></tr>

<tr><td style="padding:0 40px 28px 40px;font-size:15px;line-height:24px;color:#3a3f49;">
  <p style="margin:0 0 16px 0;">We have received your inquiry and a member of the Zenith Risk Strategies team will follow up with you shortly.</p>
  <p style="margin:0 0 16px 0;">If your request requires immediate attention, please feel free to reach out to us directly at
    <a href="mailto:info@zenithriskstrategies.com" style="color:#1a6dd4;text-decoration:none;">info@zenithriskstrategies.com</a>.
  </p>
  <p style="margin:0 0 0 0;">We appreciate your interest and look forward to connecting with you.</p>
</td></tr>

<tr><td style="padding:0 40px 28px 40px;">
  <p style="margin:0;font-size:14px;color:#3a3f49;line-height:22px;">
    Warm regards,<br/>
    <strong>The Zenith Risk Strategies Team</strong>
  </p>
</td></tr>
` +
    emailFooter()
  );
}

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */

module.exports = {
  SENDER,
  renderZenithInternalEmail,
  renderZenithCustomerEmail,
};
