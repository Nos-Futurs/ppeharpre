import nodemailer from "nodemailer";

exports.handler = async function (event: any) {
  const form = JSON.parse(event.body)
  if (form.email && form.name && form.message) {
    const html = `<h1>Bonjour,</h1><br/>
    <p>Vous avez reçu un message sur votre site web.<br/></p>
    <p>Email fourni : ${form.email}<br/></p>
    <p>Nom : ${form.name} <br/></p>
    <p>Message : ${form.message}<br/></p>
    `;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact.peharpre@gmail.com",
        pass: "yptyxbdlworgklfx",
      },
    });
    let mailDetails = {
      from: "contact.peharpre@gmail.com",
      to: "contact.peharpre@gmail.com",
      subject: "Test",
      html,
    };

    try {
      const result = await transporter.sendMail(mailDetails);
      return({ statusCode: 200, body: JSON.stringify(result) });
    } catch (err) {
      return { statusCode: 500, body: JSON.stringify(err) };
    }
  } else {
    return { statusCode: 400, body: JSON.stringify({message: "No suffisient information"}) };
  }
};
