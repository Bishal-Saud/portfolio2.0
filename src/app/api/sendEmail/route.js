import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("Incoming request:", req);
    const body = await req.json();
    console.log("Parsed body:", body);
    const { name, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: "Error sending email",
      },
      { status: 500 }
    );
  }
}
