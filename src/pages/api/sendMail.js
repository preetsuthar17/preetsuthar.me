import { Resend } from "resend";
import { EmailTemplate } from "@/components/other/EmailTemplate";

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
