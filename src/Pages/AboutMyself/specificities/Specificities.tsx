import { Component } from "solid-js";

import cabinet from "../../../assets/images/cabinet.png";

import "./specificities.scss";

const MySpecificities: Component = () => {
  return (
    <div class="my-specificities" id="my_specificities">
      <div class="my-specificities__title">Mes spécificités </div>
      <div class="my-specificities__paragraphe">
        Je me mets au service des personnes que j'accompagne avec mes
        spécificités et surtout en cohérence avec la personne que je rencontre.
        <ul>
          <li>
            Je suis ancré à la terre par mon vécu familial et par la pratique
            quotidienne de la méditation.
          </li>
          <li>
            J'accompagne mes client.es dans la compréhension intellectuelle et
            émotionnelle de ce qui se passe dans leur environnement et du champ
            des possibles qui s'offrent à elleux.
          </li>
          <li>
            Je suis sensible aux enjeux de discrimination, de classe et de
            genre.
          </li>
        </ul>
      </div>
      <div class="my-specificities__image">
        <img src={cabinet} class="my-specificities__image__sketch" />
      </div>
      <div class="my-specificities__paragraphe">
        <ul>
          <li>J'ai une « écoute attentionnée », une approche non jugeante.</li>
          <li>
            Je rejoins la personne, où elle se trouve, dans le respect de son
            intimité.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySpecificities;
