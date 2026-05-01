const { neon } = require("@neondatabase/serverless");
const { Resend } = require("resend");
const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY = ["info@zenithriskstrategies.com"];

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: "Method Not Allowed" };
  try {
    const d = JSON.parse(event.body);
    const { firstName, lastName, company, title, email, phone } = d;
    const expertise = d.expertise || null;
    const perspective = d.perspective || null;
    const linkedin = d.linkedin || null;
    if (!firstName || !lastName || !email || !company || !title || !phone) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };
    }
    await sql`INSERT INTO speaker_applications (first_name, last_name, company, title, email, phone, expertise, perspective, linkedin) VALUES (${firstName}, ${lastName}, ${company}, ${title}, ${email}, ${phone}, ${expertise}, ${perspective}, ${linkedin})`;
    const emailResult = await resend.emails.send({
      from: "Zenith Forms <forms@zenithriskstrategies.com>",
      to: NOTIFY,
      subject: "New Speaker Application from " + firstName + " " + lastName,
      html: "<h2>New Speaker Application</h2>" +
        "<p><b>Name:</b> " + firstName + " " + lastName + "</p>" +
        "<p><b>Company:</b> " + company + "</p>" +
        "<p><b>Title:</b> " + title + "</p>" +
        "<p><b>Email:</b> " + email + "</p>" +
        "<p><b>Phone:</b> " + phone + "</p>" +
        "<p><b>Expertise:</b> " + (expertise || "N/A") + "</p>" +
        "<p><b>Perspective:</b> " + (perspective || "N/A") + "</p>" +
        "<p><b>LinkedIn:</b> " + (linkedin || "N/A") + "</p>"
    });
    if (emailResult && emailResult.error) {
      console.error("Resend error:", JSON.stringify(emailResult.error));
      return { statusCode: 502, headers, body: JSON.stringify({ error: "Email send failed", detail: emailResult.error }) };
    }
    console.log("Email sent:", JSON.stringify(emailResult && emailResult.data));
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
};
