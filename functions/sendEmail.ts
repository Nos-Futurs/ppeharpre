import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
dotenv.config()

exports.handler = async function (event: any) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contact.peharpre@gmail.com",
      pass: process.env.VITE_MAIL_APP_PW,
    },
  });

  const form = JSON.parse(event.body);
  if (form.email && form.name && form.message) {
    const html = `<h1>Bonjour,</h1><br/>
    <p>Vous avez reçu un message sur votre site web.<br/></p>
    <p>Email fourni : ${form.email}<br/></p>
    <p>Nom : ${form.name} <br/></p>
    <p>Message : ${form.message}<br/></p>
    `;
    const mailDetails = {
      from: "contact.peharpre@gmail.com",
      to: "contact.peharpre@gmail.com",
      subject: "Demande de contact",
      html,
    };

    try {
      const result = await transporter.sendMail(mailDetails);
      return { statusCode: 200, body: JSON.stringify(result) };
    } catch (err) {
      console.log({ statusCode: 500, body: JSON.stringify(err) });
      sendWarningEmail(JSON.stringify(err), transporter)
      return { statusCode: 500, body: JSON.stringify(err) };
    }
  } else {
    sendWarningEmail(JSON.stringify(event.body), transporter)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "No suffisient information" }),
    };
  }
};

const sendWarningEmail = async (
  error: string,
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>
) => {
  const html = `<h1>Bonjour,</h1><br/>
    <p>${error}</p>
    `;
  const mailDetails = {
    from: "contact.peharpre@gmail.com",
    to: "peharprepaul@gmail.com",
    subject: "Problème de contact, site gestalt",
    html,
  };
  await transporter.sendMail(mailDetails);
};
