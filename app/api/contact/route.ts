import { contactFormSchema } from '@/schemas/contact-form-schema';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const validatedData = contactFormSchema.parse(Object.fromEntries(formData));

    // Configurar o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SYSTEM_EMAIL_HOST || 'email-ssl.com.br', // Atualizado o hostname
      port: parseInt(process.env.SYSTEM_EMAIL_PORT || '465'), // Porta 465 para SSL
      secure: true, // Use SSL
      auth: {
        user: process.env.SYSTEM_EMAIL || 'system@windsor.com.br',
        pass: process.env.SYSTEM_EMAIL_PASSWORD || 'sys1024',
      },
    });

    // Preparar o conteúdo do e-mail
    const mailOptions = {
      from: process.env.SYSTEM_EMAIL || 'system@windsor.com.br',
      to: process.env.COMPANY_EMAIL_1 || 'contato@windsor.com.br',
      subject: 'Formulário de contato',
      html: `
        <p style='background-color: #f3f4f6; border: 1px solid #d1d5db; padding: 1rem; margin-bottom: 1rem;'>Olá! Este e-mail foi gerado pelo formulário de contato do site. Não responda este e-mail!</p>
        <p style='margin-bottom: 0.5rem;'>Seguem os dados de um possível cliente que acessou o formulário de contato do site.</p>
        <p style='margin-bottom: 0.5rem;'><strong>Assunto:</strong> ${validatedData.assunto}</p>
        <p style='margin-bottom: 0.5rem;'><strong>Nome:</strong> ${validatedData.nome}</p>
        <p style='margin-bottom: 0.5rem;'><strong>E-mail:</strong> ${validatedData.email}</p>
        <p style='margin-bottom: 0.5rem;'><strong>Telefone:</strong> ${validatedData.telefone}</p>
        <p style='margin-bottom: 0.5rem;'><strong>Celular:</strong> ${validatedData.celular}</p>
        <p style='margin-bottom: 0.5rem;'><strong>Mensagem:</strong> ${validatedData.mensagem}</p>
        <hr style='margin: 1rem 0;'>
        <p style='font-size: 0.875rem;'>&copy; ${new Date().getFullYear()} ${process.env.COMPANY_NAME || 'Windsor Idiomas'}</p>
      `,
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensagem enviada com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar o formulário:', error);
    return NextResponse.json({ error: 'Erro ao processar o formulário' }, { status: 500 });
  }
}