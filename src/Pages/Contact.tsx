import { Component } from "solid-js";
import ContactForm from "../components/Contact/contactForm/ContactForm";
import Map from "../components/map/map";
import Layout from "../layout/Layout";

import CropedImage from "../components/CropedImage/CropedImage";
import "../styles/pages/contact.scss";
import cabinet from "./../assets/images/cabinet.png";
import lighthouse from "./../assets/images/lighthouse.png";
import sea_rocks from "./../assets/images/sea_rocks.png";

const Contact: Component = () => {
  return (
    <Layout>
      <div class="contact">
        <div class="contact__face">
          <CropedImage
            src={cabinet}
            width={"70%"}
            height={"100%"}
            zoom={11}
            offsetX={1.7}
            offsetY={1.8}
          />
        </div>

        <div class="contact__information">
          <div>Philippe Péharpre</div>
          <a href="mailto:ph.peharpre@gmail.com">ph.peharpre@gmail.com</a>
          <div>+33 6 70 80 35 16 </div>
          <br />
          <div>8 Boulevard Villebois Mareuil</div>
          <div>35 400, Saint Malo</div>
        </div>
        <div class="contact__face">
          <CropedImage
            src={sea_rocks}
            width={"70%"}
            height={"100%"}
            zoom={11}
            offsetX={4.5}
            offsetY={1}
          />
        </div>
        <div class="contact__grid">
          <Map />
        </div>
        <div class="contact__grid" style={{ padding: "0%" }}>
          <ContactForm />
        </div>
        <div class="contact__cropped-image">
          <CropedImage
            src={lighthouse}
            width={"70%"}
            height={"100%"}
            zoom={11}
            offsetX={0}
            offsetY={1.3}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
