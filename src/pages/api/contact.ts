import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {name, email, subject, message} = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({message: "All fields are required"});
    }

    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Contact form submission: ${subject}`,
      text: `You have a new contact form submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({message: "Email sent successfully"});
    } catch (error) {
      // Check if error is an instance of Error
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Error sending email:", errorMessage);
      res
        .status(500)
        .json({message: "Error sending email", error: errorMessage});
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;