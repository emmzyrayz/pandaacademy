import nodemailer from "nodemailer";

export async function sendMail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "pandaacademybootcamp@gmail.com",
    subject: `Contact form submission: ${subject}`,
    text: `You have a new contact form submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return {success: true, message: "Email sent successfully"};
  } catch (error) {
    return {success: false, message: "Error sending email", error};
  }
}