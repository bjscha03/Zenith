const { neon } = require("@neondatabase/serverless");
const { Resend } = require("resend");
const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);
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
    const emailResult = await resend.emails.send({
      from: "Zenith Forms <onboarding@resend.dev>",
      to: NOTIFY,
      subject: "New Contact Inquiry from " + firstName + " " + lastName,
      html: "<h2>New Contact Inquiry</h2><p><b>Name:</b> " + firstName + " " + lastName + "</p><p><b>Email:</b> " + email + "</p><p><b>Role:</b> " + (role || "N/A") + "</p><p><b>Message:</b> " + (message || "N/A") + "</p>"
    });
    console.log("Email result:", JSON.stringify(emailResult));
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
};
