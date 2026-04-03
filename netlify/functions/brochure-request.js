const { neon } = require("@neondatabase/serverless");
const { Resend } = require("resend");
const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY = ["info@zenithriskstrategies.com", "brandon.schaefer@hotmail.com", "twagner@zenithriskstrategies.com"];

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: "Method Not Allowed" };
  try {
    const { firstName, lastName, email, company, brochureType } = JSON.parse(event.body);
    if (!firstName || !lastName || !email) return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };
    await sql`INSERT INTO brochure_requests (first_name, last_name, email, company, brochure_type) VALUES (${firstName}, ${lastName}, ${email}, ${company || null}, ${brochureType || "apollo"})`;
    const emailResult = await resend.emails.send({
      from: "Zenith Forms <forms@zenithriskstrategies.com>",
      to: NOTIFY,
      subject: "New Brochure Request from " + firstName + " " + lastName,
      html: "<h2>Brochure Request</h2><p><b>Name:</b> " + firstName + " " + lastName + "</p><p><b>Email:</b> " + email + "</p><p><b>Company:</b> " + (company || "N/A") + "</p><p><b>Type:</b> " + (brochureType || "apollo") + "</p>"
    });
    console.log("Email result:", JSON.stringify(emailResult));
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
};
