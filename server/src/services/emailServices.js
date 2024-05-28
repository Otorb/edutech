// utils/emailVerification.js
import sgMail from "@sendgrid/mail";
import { CLAVE_API_SENDGRID, ACOUNT_GMAIL_SENDGRID } from "../config/envs.js";

// Configurar la clave de API de SendGrid
sgMail.setApiKey(CLAVE_API_SENDGRID);

export async function sendAccountCreationSuccessEmail(email) {
  const message = {
    to: email,
    from: ACOUNT_GMAIL_SENDGRID, // Reemplaza con tu dirección de correo electrónico
    subject: "Cuenta creada con exitosamente",
    text: `BIENVENIDO: tu cuenta se ha creado con exito ${email}`,
    html: `<p>BIENVENIDO: tu cuenta se ha creado con exito <strong>${email}</strong></p>`,
  };

  try {
    const sendEmailExit = await sgMail.send(message);
    console.log("Correo electrónico de verificación enviado con éxito");
    return sendEmailExit;
  } catch (error) {
    console.error(
      "Error al enviar el correo electrónico de verificación:",
      error
    );
    throw error;
  }
}
