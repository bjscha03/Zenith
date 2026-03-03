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
    const { firstName, lastName, email, role, message } = JSON.parse(event.body);
    if (!firstName || !lastName || !email) return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };
    await sql`INSERT INTO contact_inquiries (first_name, last_name, email, role, message) VALUES (${firstName}, ${lastName}, ${email}, ${role || null}, ${message || null})`;
    await resend.emails.send({
      from: "Zenith Forms <forms@zenithriskstrategies.com>",
      to: NOTIFY,
      subject: "New Contact Inquiry from " + firstName + " " + lastName,
      html: "<h2>New Contact Inquiry</h2><p><b>Name:</b> " + firstName + " " + lastName + "</p><p><b>Email:</b> " + email + "</p><p><b>Role:</b> " + (role || "N/A") + "</p><p><b>Message:</b> " + (message || "N/A") + "</p>"
    });
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
};
