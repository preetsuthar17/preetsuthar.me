import { Resend } from "resend";
const rateLimit = require("../../utils/rateLimit");

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async function (req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <contact@preetsuthar.me>",
      to: "preetsutharxd@gmail.com",
      subject: `New message from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
};

export default rateLimit(2, 30 * 60 * 1000)(handler);
