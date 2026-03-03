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
    const { name, companyName, whoYouAre, phone, email, companySize } = JSON.parse(event.body);
    if (!name || !email) return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };
    await sql`INSERT INTO schedule_calls (name, company_name, who_you_are, phone, email, company_size) VALUES (${name}, ${companyName || null}, ${whoYouAre || null}, ${phone || null}, ${email}, ${companySize || null})`;
    await resend.emails.send({
      from: "Zenith Forms <forms@zenithriskstrategies.com>",
      to: NOTIFY,
      subject: "New Schedule Call Request from " + name,
      html: "<h2>Schedule a Call Request</h2><p><b>Name:</b> " + name + "</p><p><b>Company:</b> " + (companyName || "N/A") + "</p><p><b>Role:</b> " + (whoYouAre || "N/A") + "</p><p><b>Phone:</b> " + (phone || "N/A") + "</p><p><b>Email:</b> " + email + "</p><p><b>Company Size:</b> " + (companySize || "N/A") + "</p>"
    });
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
};
