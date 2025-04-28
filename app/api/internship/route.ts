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

    try {
        // 📩 Send from Shivansh
        await transporter1.sendMail(mailOptions);

        // 📩 Send from Codeminds
        await transporter2.sendMail(mailOptions);
    } catch (error: any) {
        console.error("Email send error:", error);
        throw error; // Re-throw the error to be caught in the POST handler
    }
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
                // Safely cast to File. formData.get('resume') returns a File if it's a file.
                if (resumeFile instanceof File) {
                    const buffer = await resumeFile.arrayBuffer();
                    const fileContent = Buffer.from(buffer);
                    attachment = {
                        filename: resumeFile.name, // Now it's safe to access .name
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

            const mailOptions: EmailOptions = {
                from: "shivanshsingh4539@gmail.com", // Or codemindswebservices@gmail.com,
                to: "shivanshsingh4539@gmail.com",         // and     codemindswebservices@gmail.com
                replyTo: email,
                subject: "Internship Application",
                html: htmlContent,
                attachments: attachment ? [attachment] : [],
            };

            await sendEmail(mailOptions);

            return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
        } catch (error: any) {
            console.error("Email send error:", error);
            return NextResponse.json({ error: "Email sending failed" }, { status: 500 }); // Keep it simple
        }
    } else {
        return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }
}
