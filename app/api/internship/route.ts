import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ReadStream } from 'fs';

interface EmailOptions {
    from: string;
    to: string;
    replyTo: string;
    subject: string;
    html: string;
    attachments?: {
        filename: string;
        content: string | Buffer | ReadStream;
        encoding?: string;
    }[];
}

const sendEmail = async (mailOptions: EmailOptions) => {
    // 🔐 Transporter 1 - Shivansh's Gmail
    const transporter1 = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "shivanshsingh4539@gmail.com",
            pass: "ubwk effo ztdz cjkd", //  <===  App Password or Correct Password
        },
    });

    // 🔐 Transporter 2 - Codeminds Gmail
    const transporter2 = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "codemindswebservices@gmail.com",
            pass: "wscb pduy cmuk tbdp", //  <=== App Password or Correct Password
        },
    });

    // 📩 Send from Shivansh
    await transporter1.sendMail(mailOptions);

    // 📩 Send from Codeminds
    await transporter2.sendMail(mailOptions);
};

export async function POST(req: Request) {
    if (req.method === "POST") {
        try {
            const formData = await req.formData();
            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const interest = formData.get('interest') as string;
            const resumeFile = formData.get('resume') as Blob | null;

            if (!name || !email || !interest) {
                return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
            }

            let attachment: { filename: string; content: Buffer | ReadStream; encoding?: string } | undefined;

            if (resumeFile) {
                const buffer = await resumeFile.arrayBuffer();
                const fileContent = Buffer.from(buffer);
                attachment = {
                    filename: resumeFile.name,
                    content: fileContent,
                };
            }

            const htmlContent = `
        <h1>Internship Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Area of Interest:</strong> ${interest}</p>
        ${resumeFile ? `<p><strong>Resume:</strong> ${resumeFile.name}</p>` : ''}
      `;

            const mailOptions: EmailOptions = {
                from: "shivanshsingh4539@gmail.com", // Or codemindswebservices@gmail.com,
                to: "shivanshsingh4539@gmail.com",    // and  codemindswebservices@gmail.com
                replyTo: email,
                subject: "Internship Application",
                html: htmlContent,
                attachments: attachment ? [attachment] : [],
            };

            await sendEmail(mailOptions);

            return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
        } catch (error) {
            console.error("Email send error:", error);
            return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }
}
