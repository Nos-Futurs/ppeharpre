import { Component } from "solid-js";
import ContactForm from "../components/contactForm/ContactForm";
import Map from "../components/map/map";
import Layout from "../layout/Layout";

const Contact: Component = () => {
  return (
    <Layout>
      <Map />
      <div style={{display: "flex", "justify-content": "center"}}>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
