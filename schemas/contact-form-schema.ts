import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  celular: z.string().min(10, { message: "Celular deve ter pelo menos 10 dígitos" }),
  subject: z.string().min(3, { message: "Assunto deve ter pelo menos 3 caracteres" }),
  message: z.string().min(3, { message: "Mensagem deve ter pelo menos 3 caracteres" }),
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