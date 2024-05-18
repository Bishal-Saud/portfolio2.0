import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { name, email, phone, subject, message } = body;

    // console.log(name, email, phone, subject, message); // Check if data is received correctly

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

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error sending email",
      },
      { status: 500 }
    );
  }
}
