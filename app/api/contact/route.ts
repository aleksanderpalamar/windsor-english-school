import { contactFormSchema } from '@/schemas/contact-form-schema';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { Attachment } from 'nodemailer/lib/mailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const attachment = formData.get('attachment');
    
    // Validate the form data
    const validatedData = contactFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      attachment: attachment instanceof File ? attachment : null,
    });

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare attachments if file is present
    const attachments: Attachment[] = [];
    if (validatedData.attachment instanceof File) {
      const fileBuffer = await validatedData.attachment.arrayBuffer();
      attachments.push({
        filename: validatedData.attachment.name,
        content: Buffer.from(fileBuffer),
      });
    }

    // Prepare email content with proper typing
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Novo contato do site: ${validatedData.subject}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone}
        Subject: ${validatedData.subject}
        Message: ${validatedData.message}
      `,
      attachments,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

