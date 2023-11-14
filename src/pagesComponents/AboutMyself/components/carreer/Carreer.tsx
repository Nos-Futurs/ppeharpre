import { Component } from "solid-js";

import trek from "@assets/images/trek.png";
import CropedImage from "../../../../components/CropedImage/CropedImage";

import "./carreer.scss";

const Carreer: Component = () => {
  return (
    <section class="carreer" id="carreer">
      <h1 class="carreer__title">Parcours professionnel et formation</h1>
      <p class="carreer__paragraphe">
        J'ai eu un parcours professionnel en entreprise avec des responsabilités
        de dirigeant. Diplômé <b>coach professionnel</b> en 2010 à HEC Paris,
        j'accompagne également des cadres et des manageurs.euses. En 2013, j'ai
        commencé mon parcours en gestalt thérapie à l'EPG (Ecole Parisienne de
        Gestalt). Je suis diplômé <b>gestalt praticien.</b>
      </p>
      <div class="carreer__items-1">
        <div class="carreer__item1">
          <CropedImage
            src={trek}
            alt={"blank"}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="carreer__item1">
          <CropedImage
            alt={"blank"}
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
            alt={"blank"}
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
            alt={"blank"}
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
            alt={"blank"}
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"450px"}
            height={"120px"}
          />
        </div>
      </div>
      <p class="carreer__paragraphe">
        Cette formation implique un travail sur soi avec un.e thérapeute, de la
        thérapie en groupe, des formations thématiques (sexualité, violence,
        deuil, questions existentielles...) et en psychopathologie, et de très
        nombreux stages. <br /> <br /> La pédagogie de l'EPG se caractérise par
        la place donnée au vécu, à l'expérimentation et l'attention particulière
        donnée aux processus corporels et émotionnels
        <br /> <br /> L'EPG est accréditée aux niveaux national et européen par
        l'EAGT (European Association for Gestalt Therapy), l'EAP (European
        Association for Psychotherapy) et la FF2P.
      </p>
      <p class="carreer__paragraphe">
        <b>Je suis membre de la FF2P</b> (Fédération Française de Psychothérapie
        et de Psychanalyse), de En Contact (Association des anciens de l'EPG) et
        de RGO (Réseau Gestalt Ouest). A ce jour, je suis engagé dans des
        associations de soutien d'étudiants.es au sein de Tous Egaux à l'Ecole
        et de femmes dirigeantes au sein de EWA Boost (ESSEC Woman Association).
        Je réalise des accompagnements solidaires pour des étudiants.es ou des
        personnes aux revenus modestes.
      </p>
      <div class="carreer__items">
        <div class="carreer__item1">
          <CropedImage
            alt={"blank"}
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
            alt={"blank"}
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
            alt={"blank"}
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"450px"}
            height={"120px"}
          />
        </div>
      </div>
    </section>
  );
};

export default Carreer;
