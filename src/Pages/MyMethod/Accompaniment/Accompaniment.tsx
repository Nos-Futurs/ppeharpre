import { Component } from "solid-js";

import trek from "../../../assets/images/trek.png";

import CropedImage from "../../../components/CropedImage/CropedImage";
import "./accompaniment.scss";

const Accompaniment: Component = () => {
  return (
    <div class="accompaniment" id="accompaniment">
      <h1 class="accompaniment__title">Votre accompagnement</h1>
      <div class="accompaniment__croped-paragraphe">
        <p>
          Je vous accompagne sur votre parcours de vie et{" "}
          <b>
            je vous soutiens dans la recherche de l'impulsion nécessaire à la
            mise en mouvement.
          </b>{" "}
          J'aime utiliser la métaphore de la marche, elle symbolise bien ce
          mouvement rythmé, lent, régulier qui nécessite de respirer et de
          prendre soin de son corps tout en étant à l’écoute de l’environnement.{" "}
          <br />
          Je crois fondamentalement en l'humain, en sa capacité de créativité,
          en son énergie vitale.{" "}
        </p>
      </div>
      <div class="accompaniment__sketch-container">
        <img src={trek} class="accompaniment__sketch" />
      </div>
      <p class="accompaniment__croped-paragraphe-1">
        Ainsi{" "}
        <b>
          au regard de vos expériences au quotidien, vous pourrez questionner
          votre vécu et expérimenter très concrètement de nouvelles façons
          d'agir ou d'appréhender les situations.
        </b>
      </p>
      <p class="accompaniment__paragraphe">
        Je m'attache à vous accompagner avec une écoute active et{" "}
        <b>
          je prends en considération le langage des mots, du corps et des
          émotions.
        </b>{" "}
        Ce temps unique, pour vous-même, vous offre l'opportunité d'aller
        explorer vos questionnements, vos incertitudes et d'ouvrir le champ des
        possibles. Mon approche est empreinte de non jugement et de respect.
      </p>
      <div class="accompaniment__items">
        <div class="accompaniment__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="accompaniment__item1">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"150px"}
            height={"130px"}
          />
        </div>
        <div class="accompaniment__item2">
          <CropedImage
            src={trek}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={"60%"}
            height={"120px"}
          />
        </div>
      </div>
      <p class="accompaniment__croped-paragraphe">
        Chacun peut traverser, à certains moments de sa vie, des difficultés, et
        ce n'est en aucun cas inéluctable. J'apporte ma sensibilité et mon
        humanité sur ce chemin parfois difficile mais tellement riche de
        possibles.
      </p>
    </div>
  );
};

export default Accompaniment;
