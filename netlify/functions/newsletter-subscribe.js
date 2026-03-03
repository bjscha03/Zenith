const { neon } = require("@neondatabase/serverless");
const { Resend } = require("resend");
const sql = neon("postgresql://neondb_owner:npg_PTrh89sHkjzd@ep-late-cake-aikuykk7-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require");
const resend = new Resend("re_7cUQavci_4T2XESHNtPAt8ms5pXFqZC8u");
const NOTIFY = ["brandon.schaefer@hotmail.com", "twagner@zenithriskstrategies.com"];

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: "Method Not Allowed" };
  try {
    const { email } = JSON.parse(event.body);
    if (!email) return { statusCode: 400, headers, body: JSON.stringify({ error: "Email required" }) };
    await sql`INSERT INTO newsletter_subscribers (email) VALUES (${email}) ON CONFLICT (email) DO NOTHING`;
    await resend.emails.send({
      from: "Zenith Forms <forms@zenithriskstrategies.com>",
      to: NOTIFY,
      subject: "New Newsletter Subscriber: " + email,
      html: "<h2>New Newsletter Subscriber</h2><p><b>Email:</b> " + email + "</p>"
    });
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
};
