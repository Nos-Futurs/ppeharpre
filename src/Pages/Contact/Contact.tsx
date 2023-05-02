import { Component } from "solid-js";
import ContactForm from "../../components/Contact/contactForm/ContactForm";
import Map from "../../components/map/map";

import cabinet from "@assets/images/cabinet.png";
import lighthouse from "@assets/images/lighthouse.png";
import sea_rocks from "@assets/images/sea_rocks.png";
import CropedImage from "../../components/CropedImage/CropedImage";
import "./contact.scss";

const Contact: Component = () => {
  return (
    <div class="contact">
      <div class="contact__face left">
        <CropedImage
          alt={"philippe_face_left"}
          src={cabinet}
          width={"70%"}
          height={"100%"}
          zoom={11}
          offsetX={2}
          offsetY={1.8}
          willChange={"right"}
        />
      </div>

      <div class="contact__information">
        <div>Philippe Péharpré</div>
        <a href="mailto:ph.peharpre@gmail.com">contact.peharpre@gmail.com</a>
        <div>06 07 79 62 12 </div>
        <br />
        <div>8 Bld Villebois Mareuil</div>
        <div>35 400 Saint Malo</div>
      </div>
      <div class="contact__face">
        <CropedImage
          alt={"philippe_face_right"}
          src={sea_rocks}
          width={"70%"}
          height={"100%"}
          zoom={11}
          offsetX={5.3}
          offsetY={1}
          willChange={"right"}
        />
      </div>
      <div class="contact__grid-1">
        <Map />
      </div>
      <div class="contact__grid-2 ">
        <ContactForm />
      </div>
      <div class="contact__cropped-image">
        <CropedImage
          alt={"philippe_face"}
          src={lighthouse}
          width={"70%"}
          maxWidth={"1106px"}
          height={"100%"}
          zoom={11}
          offsetX={0}
          offsetY={1.3}
        />
      </div>
    </div>
  );
};

export default Contact;
