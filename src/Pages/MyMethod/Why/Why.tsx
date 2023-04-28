import { Component } from "solid-js";

import trek from "../../../assets/images/trek.png";
import CropedImage from "../../../components/CropedImage/CropedImage";
import "./why.scss";

const Why: Component = () => {
  return (
    <div class="why" id="why">
      <h1 class="why__title">Pourquoi se faire accompagner ?</h1>
      <p class="why__paragraphe">
        Faire cette démarche, c'est vous
        <b> accorder un temps afin d'être écouté.e et soutenu.e.</b>
      </p>
      <div class="why__croped-paragraphe">
        Vous pouvez vouloir :
        <ul>
          <li>mieux connaître vos propres désirs,</li>
          <li>être en quête d'un mieux vivre au quotidien,</li>
          <li>
            améliorer vos relations avec les autres (au sein de la famille, du
            couple, de l'entreprise),
          </li>
          <li>
            mieux vivre votre équilibre vie professionnelle – vie personnelle,
          </li>
          <li>
            faire face au stress, aux angoisses, aux peurs, à l'épuisement
            professionnel, à un sentiment de rejet,
          </li>
          <li>
            trouver un sens à votre vie face aux grandes questions
            existentielles comme le sens, la solitude, la finitude, la
            responsabilité, l'imperfection,
          </li>{" "}
          <li>
            gérer une transition de vie, un déménagement, un départ à la
            retraite, un nouveau poste, un nouveau métier,
          </li>{" "}
          <li>faire face à un deuil,</li>{" "}
          <li>restaurer ou installer la confiance en vous même,</li>{" "}
          <li>apaiser une souffrance,</li> <li>initier un changement...</li>
        </ul>
      </div>
      <div class="why__sketch-container">
        <CropedImage
          src={trek}
          width={"430px"}
          height={"80%"}
          zoom={14.7}
          offsetX={9.9}
          offsetY={10.5}
          willChange={"right"}
        />
      </div>
      <div class="why__sketch-container-full">
        <CropedImage
          src={trek}
          width={"60%"}
          height={"50%"}
          zoom={11}
          offsetX={0.7}
          offsetY={12.7}
        />
      </div>
    </div>
  );
};

export default Why;
