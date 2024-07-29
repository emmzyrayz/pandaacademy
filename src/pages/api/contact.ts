import type {NextApiRequest, NextApiResponse} from "next";
import {sendMail} from "@/lib/contact";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {name, email, subject, message} = req.body;

    const result = await sendMail({name, email, subject, message});

    if (result.success) {
      res.status(200).json({message: result.message});
    } else {
      res.status(500).json({message: result.message, error: result.error});
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;