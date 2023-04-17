import emailjs from "@emailjs/browser";
import axios from "axios";

export const sendEmail = async (form: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const result = await axios.get("/.netlify/functions/getEmailVariables");
    if (
      result.data.service_id &&
      result.data.user_id &&
      result.data.template_id
    ) {
      emailjs.send(
        result.data.service_id,
        result.data.template_id,
        form,
        result.data.user_id
      );
    }
  } catch (err) {
    throw new Error("variables not found");
  }
};
