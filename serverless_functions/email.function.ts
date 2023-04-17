import emailjs from "@emailjs/browser";
import { emailJSVariables } from "./emailJS.config";

exports.handler = async function (form: any) {
  emailjs
    .send(
      emailJSVariables.serviceID,
      emailJSVariables.templateID,
      form,
      emailJSVariables.apiKey
    ).then(
      (response) => {
        return {statusCode: 200}
      },
      (err) => {
        return {statusCode: err.statusCode}
      }
    );
};
