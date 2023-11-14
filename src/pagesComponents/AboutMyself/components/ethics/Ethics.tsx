import { Component } from "solid-js";

import cabinet from "../../../../assets/images/cabinet.png";
import CropedImage from "../../../../components/CropedImage/CropedImage";
import "./ethics.scss";

const Ethics: Component = () => {
  return (
    <section class="ethics" id="ethics">
      <h1>Ma déontologie et éthique</h1>
      <p class="ethics__paragraphe">
        <b>La confidentialité et le non jugement </b>font partie de ma façon
        d'être et de mon accompagnement. <br /> {" "}
        <b>Je suis supervisé en groupe et individuellement.</b> Je me forme de
        façon continue afin d'enrichir mon approche. <br /> Mes séances
        ne sont pas remboursées par la sécurité sociale.
        <br />Je suis signataire du code de déontologie de la FF2P.
      </p>
      <div class="ethics__image">
        <CropedImage
          src={cabinet.src}
          alt={"face_cabinet"}
          width={"800px"}
          height={"160px"}
          zoom={11}
          offsetX={1.6}
          offsetY={2.5}
          willChange={"left"}
        />
      </div>
      <div class="ethics__image-responsive-medium">
        <CropedImage
          src={cabinet.src}
          alt={"face_cabinet"}
          width={"490px"}
          height={"140px"}
          zoom={8}
          offsetX={1}
          offsetY={1.8}
          willChange={"left"}
        />
      </div>
      <div class="ethics__image-responsive-small">
        <CropedImage
          src={cabinet.src}
          alt={"face_cabinet"}
          width={"290px"}
          height={"100px"}
          zoom={6}
          offsetX={1}
          offsetY={1.4}
          willChange={"left"}
        />
      </div>
    </section>
  );
};

export default Ethics;
