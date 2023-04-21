import { Component } from "solid-js";

import lighthouse from "./../assets/images/lighthouse.png";

import CropedImage from "../components/CropedImage/CropedImage";
import "../styles/pages/gestalt.scss";

const Gestalt: Component = () => {
  return (
    <div class="gestalt">
      <div class="gestalt__title">La Gestalt Thérapie</div>
      <div class="gestalt__paragraphe">
        La gestalt est une branche de la psychologie qui est parfois qualifiée
        de thérapie du contact. <br />
        <br />
        La gestalt permet
        <ul>
          <li>
            de prendre conscience de ses émotions, de les accueillir et de les
            vivre en lien avec les autres
          </li>
          <li>
            de vivre plus en harmonie avec soi et avec les autres, en étant
            conscient de sa façon d'être en contact.
          </li>
        </ul>
      </div>
      <div class="gestalt__image" style={{ "grid-column": "1/4" }}>
        <img src={lighthouse} class="gestalt__image__sketch" />
      </div>
      <div class="gestalt__cropped-paragraphe ">
        Conceptualisée dans les années 50 à plusieurs mains sous la houlette de
        Fritz et Laura Perls et toujours en mouvement, la gestalt est une des
        psychothérapies humanistes existentielles la plus étendue.
        <ul>
          <li>
            elle s'intéresse à la relation, au vécu, au lien, à comment la
            personne accompagnée interagit avec les autres.
          </li>
          <li>
            le travail se fait dans l'ici et maintenant, avec de
            l'expérimentation.
          </li>
          <li>
            la gestalt favorise le dialogue constant entre émotions et
            sensations corporelles.
          </li>
          <li>
            adans les relations que la personne accompagnée vit à l'extérieur ou
            au sein du cabinet, des formes répétitives ou figées peuvent se
            rejouer et leur identification permet de les mettre en mouvement.
          </li>{" "}
          <li>
            c'est une approche humaniste qui croie en l'humain et dans sa
            capacité à être en lien avec lui et avec les autres.
          </li>{" "}
          <li>
            l'idée est de développer la prise de conscience, l'autonomie, la
            responsabilité et la créativité.
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
        La puissance de l'approche gestaltiste est de :
        <ul>
          <li>
            utiliser ce qui se passe ici et maintenant, dans le cadre sécurisé
            du cabinet,,
          </li>
          <li>
            prendre le.a client.e comme iel est, sans le.a catégoriser mais en
            l'accompagnant dans le respect de sa personne
          </li>
          <li>
            chercher le mieux vivre avec soi et les autres dans le moment
            présent
          </li>
          <li>
            appréhender le.a client.e dans sa globalité avec ses pensées, ses
            sensations et ses émotions.
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default Gestalt;
