import { Component } from "solid-js";

import cabinet from "../../../assets/images/cabinet.png";
import CropedImage from "../../../components/CropedImage/CropedImage";
import "./ethics.scss";

const Ethics: Component = () => {
  return (
    <div class="ethics" id="ethics">
      <div class="ethics__title">Ma déontologique et éthique</div>
      <div class="ethics__paragraphe">
        La confidentialité et le non jugement font partie de ma façon d'être et
        de mon accompagnement. <br /> <br /> Je suis supervisé en groupe et
        individuellement. Je poursuis ma formation professionnelle au sein de
        l'EPG (Ecole Parisienne de Gestalt). <br /> <br /> Mes accompagnements
        ne sont pas remboursés par la sécurité sociale. <br /> <br /> Je suis
        signataire du code de déontologie de la FF2P.
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
          width={"280px"}
          height={"160px"}
          zoom={11}
          offsetX={4.5}
          offsetY={2.5}
          willChange={"left"}
        />
      </div>
    </div>
  );
};

export default Ethics;
