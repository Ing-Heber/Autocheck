import { z } from "zod";

/**
 * Mexican mobile phone: exactly 10 digits, no spaces or separators.
 * e.g. 3121234567
 */
const mexicanPhone = /^\d{10}$/;

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres.")
        .max(80, "El nombre no puede exceder 80 caracteres."),

    email: z
        .string()
        .email("Ingresa un correo electrónico válido."),

    phone: z
        .string()
        .regex(mexicanPhone, "Ingresa un número de 10 dígitos (ej. 3121234567)."),

    message: z
        .string()
        .min(10, "El mensaje debe tener al menos 10 caracteres.")
        .max(1000, "El mensaje no puede exceder 1000 caracteres."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

