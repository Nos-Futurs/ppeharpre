import axios from "axios";

export const sendEmail = async (form: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const result = await axios.post("/.netlify/functions/sendEmail", form);
    return result
  } catch (err) {
    throw new Error("L'envoie de mail n'a pas fonctionné");
  }
};
