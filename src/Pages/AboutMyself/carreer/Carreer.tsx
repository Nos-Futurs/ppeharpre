import { Component } from "solid-js";

import trek from "../../../assets/images/trek.png";
import CropedImage from "../../../components/CropedImage/CropedImage";

import "./carreer.scss";

const Carreer: Component = () => {
  return (
    <div class="carreer" id="carreer">
      <div class="carreer__title">Parcours professionnel et formation </div>
      <div class="carreer__paragraphe">
        Dans un premier temps, j'ai eu un parcours professionnel en entreprise
        avec des responsabilités d'équipe qui m'a amené à me former au coaching
        professionnel, en 2009/2010, via une formation à HEC Paris. Depuis 2010,
        j'accompagne en coaching professionnel des cadres et des manageurs
        d'entreprise. En 2013, j'ai commencé mon parcours en gestalt thérapie à
        l'EPG. Je suis diplômé gestalt praticien. Je poursuis mon parcours
        d'apprentissage.
      </div>
      <div class="carreer__items">
        <div class="carreer__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="carreer__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
      </div>
      <div class="carreer__items">
        <div class="carreer__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="carreer__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="carreer__item2">
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
      <div class="carreer__paragraphe">
        Cette formation implique un travail sur soi avec un thérapeute, de la
        thérapie en groupe, des formations thématiques (psychopathologie,
        sexualité, violence, deuil, questions existentielles...) et de très
        nombreux stages. <br /> <br /> La pédagogie de l'EPG se caractérise par
        :
        <ul>
          <li>la place donnée à l'expérienciel</li>
          <li>
            l'attention particulière donnée aux processus corporels et
            émotionnels
          </li>
        </ul>
        L'EPG (Ecole Parisienne de Gestalt) est accréditée aux niveaux national
        et européen par :
        <ul>
          <li>l'EAGT (European Association for Gestalt Therapy)</li>
          <li>l'EAP (European Association for Psychotherapy)</li>
          <li>
            la FF2P (Fédération Française de Psychothérapie et de Psychanalyse)
          </li>
        </ul>
      </div>
      <div class="carreer__paragraphe">
        Je suis membre de la FF2P (Fédération Française de Psychothérapie et de
        Psychanalyse), de en contact (Association des anciens de l'EPG) et de
        RGO (Réseau Gestalt Ouest)
        <br />
        J'ai toujours été impliqué dans des associations. A ce jour, je suis
        engagé dans des associations de soutien d'étudiants et étudiantes au
        sein de Tous Egaux à l'Ecole et de femmes dirigeantes au sein de EWA
        Boost. Je réalise des accompagnements solidaires pour des étudiants ou
        des personnes aux revenus modestes.
      </div>
      <div class="carreer__items">
        <div class="carreer__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="carreer__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="carreer__item2">
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
    </div>
  );
};

export default Carreer;
