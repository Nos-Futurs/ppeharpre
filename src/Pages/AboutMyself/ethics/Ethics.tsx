import { Component } from "solid-js";

import cabinet from "../../../assets/images/cabinet.png";
import CropedImage from "../../../components/CropedImage/CropedImage";
import "./ethics.scss";

const Ethics: Component = () => {
  return (
    <div class="ethics" id="ethics">
      <h1>Ma déontologie et éthique</h1>
      <div class="ethics__paragraphe">
        <p>
          <b>La confidentialité et le non jugement </b>font partie de ma façon
          d'être et de mon accompagnement. <br /> <br />{" "}
          <b>Je suis supervisé en groupe et individuellement.</b> Je me forme de
          façon continue afin d'enrichir mon approche. <br /> <br /> Mes séances
          ne sont pas remboursées par la sécurité sociale.
          <br /> <br /> Je suis signataire du code de déontologie de la FF2P.
        </p>
      </div>
      <div class="ethics__image">
        <CropedImage
          src={cabinet}
          width={"800px"}
          height={"160px"}
          zoom={11}
          offsetX={1.6}
          offsetY={2.5}
          willChange={"left"}
        />
      </div>
      <div class="ethics__image-responsive">
        <CropedImage
          src={cabinet}
          width={"290px"}
          height={"100px"}
          zoom={6}
          offsetX={1}
          offsetY={1.4}
          willChange={"left"}
        />
      </div>
    </div>
  );
};

export default Ethics;
