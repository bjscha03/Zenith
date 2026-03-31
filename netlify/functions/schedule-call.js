const { neon } = require("@neondatabase/serverless");
const { Resend } = require("resend");
const { SENDER, renderZenithInternalEmail, renderZenithCustomerEmail } = require("./email-templates");

const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // --- Database insert (must succeed) ---
    await sql`INSERT INTO schedule_calls (name, company_name, who_you_are, phone, email, company_size) VALUES (${name}, ${companyName || null}, ${whoYouAre || null}, ${phone || null}, ${email}, ${companySize || null})`;

    // --- Email sending (non-blocking — DB insert already succeeded) ---
    try {
      const fields = [
        { label: "Name", value: name },
        { label: "Company", value: companyName },
        { label: "Role", value: whoYouAre },
        { label: "Phone", value: phone },
        { label: "Email", value: email },
        { label: "Employee Count", value: companySize },
      ];

      // 1. Internal notification
      const internalResult = await resend.emails.send({
        from: SENDER,
        to: ["info@zenithriskstrategies.com"],
        cc: ["brandon.schaefer@hotmail.com"],
        subject: "New Form Submission – Zenith Risk Strategies",
        html: renderZenithInternalEmail("Schedule a Call", fields),
      });
      console.log("Internal email result:", JSON.stringify(internalResult));

      // 2. Customer confirmation
      const customerResult = await resend.emails.send({
        from: SENDER,
        to: [email],
        subject: "We received your request",
        html: renderZenithCustomerEmail({ name }),
      });
      console.log("Customer email result:", JSON.stringify(customerResult));
    } catch (emailErr) {
      console.error("Email sending failed (DB insert succeeded):", emailErr);
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
};
