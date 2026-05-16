import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/data/contactSchema";

// ─── Env resolution ──────────────────────────────────────────────────────────
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

// TODO: To split sender/recipient in the future:
//   - Set SMTP_USER + SMTP_PASS to a dedicated no-reply Gmail account.
//   - Set CONTACT_EMAIL to the inbox that should receive form notifications
//     (e.g. autocheckcontabilidad@gmail.com or any team inbox).
//   No structural code changes needed here — both variables are already
//   resolved independently below.
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

// Fallback: if CONTACT_EMAIL is not set, deliver to the sender account instead.
// A warning is emitted so misconfigured environments are easy to spot in logs.
const resolveRecipient = (): string | null => {
    if (CONTACT_EMAIL) return CONTACT_EMAIL;

    if (SMTP_USER) {
        console.warn(
            "[contact/route] CONTACT_EMAIL is not set. " +
            "Falling back to SMTP_USER as recipient. " +
            "Set CONTACT_EMAIL in .env.local to suppress this warning."
        );
        return SMTP_USER;
    }

    return null;
};

// ─── POST /api/contact ───────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
    // Guard: missing SMTP credentials
    if (!SMTP_USER || !SMTP_PASS) {
        console.error(
            "[contact/route] SMTP_USER or SMTP_PASS is not configured. " +
            "Email delivery is disabled. Check your .env.local file."
        );
        return NextResponse.json(
            { error: "El servicio de correo no está configurado. Intenta más tarde." },
            { status: 503 }
        );
    }

    const recipient = resolveRecipient();

    // Guard: no deliverable recipient at all
    if (!recipient) {
        console.error(
            "[contact/route] No recipient could be resolved. " +
            "Set CONTACT_EMAIL or SMTP_USER in .env.local."
        );
        return NextResponse.json(
            { error: "El servicio de correo no está configurado. Intenta más tarde." },
            { status: 503 }
        );
    }

    // Parse + validate body
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { error: "Datos del formulario inválidos.", details: parsed.error.flatten() },
            { status: 422 }
        );
    }

    const { name, email, phone, message } = parsed.data;

    // Build transporter
    // TODO: If switching to a non-Gmail SMTP provider, update `host`, `port`,
    //       and `secure` values here and adjust env var names accordingly.
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"Autocheck Contacto" <${SMTP_USER}>`,
        to: recipient,
        replyTo: email,
        subject: `Nuevo mensaje de contacto — ${name}`,
        text: [
            `Nombre:  ${name}`,
            `Correo:  ${email}`,
            `Teléfono: ${phone}`,
            ``,
            `Mensaje:`,
            message,
        ].join("\n"),
        html: `
            <table style="font-family:sans-serif;font-size:15px;color:#1f2937;max-width:600px">
                <tr><td style="padding:8px 0"><strong>Nombre:</strong> ${name}</td></tr>
                <tr><td style="padding:8px 0"><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0"><strong>Teléfono:</strong> ${phone}</td></tr>
                <tr><td style="padding:16px 0 8px"><strong>Mensaje:</strong></td></tr>
                <tr>
                    <td style="background:#f3f4f6;border-radius:8px;padding:16px;white-space:pre-wrap">
                        ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
                    </td>
                </tr>
            </table>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        // Log the error server-side without exposing details to the client
        console.error("[contact/route] Failed to send email:", err);
        return NextResponse.json(
            { error: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
            { status: 500 }
        );
    }
}

