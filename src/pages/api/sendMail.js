import { Resend } from "resend";
import { EmailTemplate } from "@/components/other/EmailTemplate";

const requestCounts = {};

export const rateLimit = (req, res, next) => {
  const ip = req.socket.remoteAddress;
  const currentTime = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = {
      count: 1,
      lastRequestTime: currentTime,
    };
  } else {
    const elapsedTime = currentTime - requestCounts[ip].lastRequestTime;

    if (elapsedTime < 60000) {
      requestCounts[ip].count++;
    } else {
      requestCounts[ip] = {
        count: 1,
        lastRequestTime: currentTime,
      };
    }
  }

  if (requestCounts[ip].count > 5) {
    return res
      .status(429)
      .json({ error: "Rate limit exceeded. Try again later." });
  }

  next();
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { name, email, description, budgetAmount, selectedServices } = req.body;

  try {
    const data = await resend.emails.send({
      from: "freelance@preetsuthar.me",
      to: `preetsutharxd@gmail.com`,
      subject: `Mail from ${name}`,
      react: EmailTemplate({
        name,
        email,
        description,
        budgetAmount,
        selectedServices,
      }),
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}
