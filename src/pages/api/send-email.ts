import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, service, message } = req.body;

    const nodemailer = require("nodemailer");

    // Configuración del transporter de Nodemailer
    let transporter = nodemailer.createTransport({
      service: "gmail", // Utilizando el servicio de Gmail
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    try {
      // Envía el correo electrónico
      await transporter.sendMail({
        from: "conatacto@oasiscare.com", // Dirección del remitente
        to: "lucianomasuelli.lm@gmail.com", // Dirección de la empresa
        subject: `Nuevo mensaje de ${name}`, // Asunto
        text: `
          Nombre del cliente: ${name}
          Correo electrónico: ${email}
          Servicio solicitado: ${service}
          Mensaje:
          ${message}
        `,
      });

      return res.status(200).json({ message: "Correo enviado con éxito" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).json({ message: "Error al enviar el correo" });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido" });
  }
}
