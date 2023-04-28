import { Component } from "solid-js";

import lighthouse from "@assets/images/lighthouse.png";

import CropedImage from "../../components/CropedImage/CropedImage";
import "./gestalt.scss";

const Gestalt: Component = () => {
  return (
    <div class="gestalt">
      <h1 class="gestalt__title">La gestalt thérapie</h1>
      <div class="gestalt__paragraphe">
        La gestalt est une branche de la psychologie qui est parfois qualifiée
        de thérapie du contact. Conceptualisée dans les années 50 à plusieurs
        mains sous la houlette de Fritz et Laura Perls, elle est toujours en
        évolution ; c'est{" "}
        <b>
          une des psychothérapies humanistes existentielles les plus
          représentées.
        </b>
      </div>
      <div class="gestalt__image" style={{ "grid-column": "1/4" }}>
        <img src={lighthouse} class="gestalt__image__sketch" />
      </div>
      <div class="gestalt__cropped-paragraphe ">
        Son apport pour votre accompagnement est de :
        <ul>
          <li>
            utiliser comme éléments de travail ce qui se passe dans{" "}
            <b>votre quotidien,</b>
          </li>
          <li>
            vous aider à être plus <b>à l'écoute de vos émotions</b>, à les
            accueillir et à les vivre,
          </li>
          <li>
            privilégier le mieux vivre avec vous même et les autres dans le
            moment présent,
          </li>
          <li>
            favoriser l'<b>expérimentation</b> de situations concrètes,
          </li>{" "}
          <li>
            développer votre <b>prise de conscience</b> de ce qui se joue et
            votre <b>liberté de choix</b>.
          </li>{" "}
        </ul>
      </div>
      <div class="gestalt__reverse-cropped-image">
        {" "}
        <CropedImage
          src={lighthouse}
          width={"70%"}
          height={"650px"}
          zoom={15}
          offsetX={2.4}
          offsetY={5}
          rotate={90}
          willChange={"right"}
        />
      </div>
      <div class="gestalt__cropped-image">
        {" "}
        <CropedImage
          src={lighthouse}
          width={"650px"}
          height={"100px"}
          zoom={15}
          offsetX={6}
          offsetY={9.4}
          willChange={"left"}
        />
      </div>

      <div class="gestalt__cropped-paragraphe ">
        <p>
          « La Gestalt soutient tout particulièrement{" "}
          <b>l’autonomie, la responsabilité et la créativité.</b> Elle met
          l’accent sur la conscience du processus en cours, dans l’ici et
          maintenant de chaque situation, et réhabilite le sensoriel et
          l’émotionnel, trop souvent censurés par notre culture.... Elle
          favorise un contact authentique avec les autres, un «ajustement
          créateur» à l’environnement.{" "}
          <b>
            Plutôt que d’expliquer les origines de nos difficultés, la Gestalt
            propose d’expérimenter des pistes de solution. »
          </b>{" "}
          (Définition de l'EPG)
        </p>
      </div>
    </div>
  );
};

export default Gestalt;
