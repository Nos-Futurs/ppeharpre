import { Component } from "solid-js";

import trek from "../../assets/images/trek.png";

import CropedImage from "../CropedImage/CropedImage";
import "./acompaniment.scss";

const Acompaniment: Component = () => {
  return (
    <div class="acompaniment">
      <div class="acompaniment__title">Mon Accompagnement :</div>
      <div class="acompaniment__croped-paragraphe">
        J'accompagne des personnes sur leur parcours de vie et je vous soutiens
        dans la recherche de l'impulsion nécessaire à la mise en mouvement.
        J'aime utiliser la métaphore de la marche, elle symbolise bien ce
        mouvement rythmé lent, régulier qui nécessite de respirer et de prendre
        soin de son corps tout en étant à l’écoute de l’environnement. <br />
        Je crois fondamentalement en l'humain, en sa capacité de créativité, en
        son énergie vitale. <br /> <br /> <br />
        Grâce aux gestalt thérapeutes qui m'ont accompagné.es ces dernière
        années, j'ai connu des transformations épanouissantes. Je me suis alors
        engagé à mon tour dans l’accompagnement en suivant la formation très
        enrichissante de cette école. La gestalt thérapie appréhende la personne
        dans sa globalité et dans son environnement sans jugement (lien). Elle
        repose sur le lien entre l’accompagné et le thérapeute et s’ancre dans
        le présent pour questionner l’ensemble du vécu.
      </div>
      <div class="acompaniment__sketch-container">
        <img src={trek} class="acompaniment__sketch" />
      </div>
      <div class="acompaniment__paragraphe">
        Je m’attache à accompagner avec une écoute active et je prends en
        considération le langage des mots, du corps et des émotions. Mon ancrage
        rassure. Il permet à la personne accompagnée une mise en mouvement et un
        espace protégé pour contacter ses sensations et ses émotions. Ce temps
        unique pour soi offre l'opportunité d'aller explorer ses
        questionnements, ses incertitudes et d'ouvrir le champ des possibles.
        J'accompagne avec une approche non jugeante dans le respect de la
        personne.
      </div>
      <div class="acompaniment__items">
        <div class="acompaniment__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="acompaniment__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="acompaniment__item2">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"450px"}
            height={"120px"}
          />
        </div>
      </div>
      <div class="acompaniment__croped-paragraphe">
        Avoir des difficultés est partagé par de nombreux individus et en même
        temps, ce n'est en aucun cas inéluctable. J'apporte ma sensibilité et
        mon humanité sur un chemin parfois difficile mais tellement riche de
        possibles et de mieux être.
      </div>
    </div>
  );
};

export default Acompaniment;
