import { z } from "zod";

export const contactFormSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(1, { message: "Telefone é obrigatório" }),
  celular: z.string().min(1, { message: "Celular é obrigatório" }),
  assunto: z.string().min(1, { message: "Assunto é obrigatório" }),
  mensagem: z.string().min(1, { message: "Mensagem é obrigatória" }),
  attachment: z.custom<FileList>()
    .transform((file) => file?.[0])
    .optional()
    .refine(
      (file) => {
        if (!file) return true;
        return file instanceof File;
      },
      "Arquivo anexado deve ser válido"
    ),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;