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
          width={"60%"}
          height={"80%"}
          zoom={11}
          offsetX={1.6}
          offsetY={2.5}
        />
      </div>
    </div>
  );
};

export default Ethics;
