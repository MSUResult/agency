import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ReadStream } from 'fs';

interface EmailOptions {
    from: string;
    to: string | string[];
    replyTo: string;
    subject: string;
    html: string;
    attachments?: {
        filename: string;
        content: string | Buffer | ReadStream;
        encoding?: string;
    }[];
}

const createTransporter = (email: string, pass: string) => {
    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: email,
            pass: pass,
        },
    });
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
                if (resumeFile instanceof File) {
                    const buffer = await resumeFile.arrayBuffer();
                    const fileContent = Buffer.from(buffer);
                    attachment = {
                        filename: resumeFile.name,
                        content: fileContent,
                    };
                }
            }

            const htmlContent = `
        <h1>Internship Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Area of Interest:</strong> ${interest}</p>
        ${resumeFile instanceof File ? `<p><strong>Resume:</strong> ${resumeFile.name}</p>` : ''}
      `;

            // Send to Shivansh
            const transporter1 = createTransporter("shivanshsingh4539@gmail.com", "ubwk effo ztdz cjkd");
            await transporter1.sendMail({
                from: "shivanshsingh4539@gmail.com",
                to: "shivanshsingh4539@gmail.com",
                replyTo: email,
                subject: "Internship Application - Shivansh",
                html: htmlContent,
                attachments: attachment ? [attachment] : [],
            });

            // Send to Codeminds
            const transporter2 = createTransporter("codemindswebservices@gmail.com", "rqei uosc pfrx twma");
            await transporter2.sendMail({
                from: "codemindswebservices@gmail.com",
                to: "codemindswebservices@gmail.com",
                replyTo: email,
                subject: "Internship Application - Codeminds",
                html: htmlContent,
                attachments: attachment ? [attachment] : [],
            });

            return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
        } catch (error: any) {
            console.error("Email send error:", error);
            return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }
}
