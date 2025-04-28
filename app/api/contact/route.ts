import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const {
        first_name,
        last_name,
        email,
        company_name,
        help,
        company_size,
        info,
      } = await req.json();

      const htmlContent = `
        <h1>Contact Form</h1>
        <p><strong>First Name:</strong> ₹{first_name}</p>
        <p><strong>Last Name:</strong> ₹{last_name}</p>
        <p><strong>Work Email:</strong> ₹{email}</p>
        <p><strong>Company Name:</strong> ₹{company_name}</p>
        <p><strong>Company Size:</strong> ₹{company_size}</p>
        <p><strong>Help:</strong> ₹{help}</p>
        <p><strong>Info:</strong> ₹{info}</p>
      `;

      // 🔐 Transporter 1 - Shivansh's Gmail
      const transporter1 = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "shivanshsingh4539@gmail.com",
          pass: "ubwk effo ztdz cjkd", // 🔑 replace with real app password
        },
      });

      // 🔐 Transporter 2 - Codeminds Gmail
      const transporter2 = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "codemindswebservices@gmail.com",
          pass: "rqei uosc pfrx twma", // 🔑 replace with real app password
        },
      });

      // 📩 Send from Shivansh
      await transporter1.sendMail({
        from: "shivanshsingh4539@gmail.com",
        to: "shivanshsingh4539@gmail.com",
        replyTo: email,
        subject: "Contact Form Submission",
        html: htmlContent,
      });

      // 📩 Send from Codeminds
      await transporter2.sendMail({
        from: "codemindswebservices@gmail.com",
        to: "codemindswebservices@gmail.com",
        replyTo: email,
        subject: "Contact Form Submission",
        html: htmlContent,
      });

      return NextResponse.json("Emails sent from both accounts");
    } catch (error) {
      console.error("Email send error:", error);
      return NextResponse.json("Email sending failed");
    }
  } else {
    return NextResponse.json("Method not allowed");
  }
}
