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
    const d = JSON.parse(event.body);
    const { firstName, lastName, company, title, email, phone } = d;
    const expertise = d.expertise || null;
    const perspective = d.perspective || null;
    const linkedin = d.linkedin || null;
    if (!firstName || !lastName || !email || !company || !title || !phone) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };
    }

    // --- Database insert (must succeed) ---
    await sql`INSERT INTO speaker_applications (first_name, last_name, company, title, email, phone, expertise, perspective, linkedin) VALUES (${firstName}, ${lastName}, ${company}, ${title}, ${email}, ${phone}, ${expertise}, ${perspective}, ${linkedin})`;

    // --- Email sending (non-blocking — DB insert already succeeded) ---
    try {
      const fields = [
        { label: "First Name", value: firstName },
        { label: "Last Name", value: lastName },
        { label: "Company", value: company },
        { label: "Title", value: title },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Expertise", value: expertise },
        { label: "Perspective", value: perspective },
        { label: "LinkedIn", value: linkedin },
      ];

      // 1. Internal notification
      const internalResult = await resend.emails.send({
        from: SENDER,
        to: ["info@zenithriskstrategies.com"],
        cc: ["brandon.schaefer@hotmail.com"],
        subject: "New Form Submission – Zenith Risk Strategies",
        html: renderZenithInternalEmail("Speaker Application", fields),
      });
      console.log("Internal email result:", JSON.stringify(internalResult));

      // 2. Customer confirmation
      const customerResult = await resend.emails.send({
        from: SENDER,
        to: [email],
        subject: "We received your request",
        html: renderZenithCustomerEmail({ firstName }),
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
