import { Component } from "solid-js";

import trek from "../../../assets/images/trek.png";

import "./accompaniment.scss";

const Accompaniment: Component = () => {
  return (
    <section class="accompaniment" id="accompaniment">
      <h1 class="accompaniment__title">Votre accompagnement</h1>
      <p class="paragraphe__first">
        <span>
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
        </span>
      </p>
      <figure class="accompaniment__sketch-container">
        <img src={trek} alt="treking-in-the-mountains" class="accompaniment__sketch" />
      </figure>
      <p class="paragraphe__second">
        {" "}
        Ainsi{" "}
        <b>
          au regard de vos expériences au quotidien, vous pourrez questionner
          votre vécu et expérimenter très concrètement de nouvelles façons
          d'agir ou d'appréhender les situations.
        </b>
      </p>
      <p class="paragraphe__third">
        Je m'attache à vous accompagner avec une écoute active et{" "}
        <b>
          je prends en considération le langage des mots, du corps et des
          émotions.
        </b>{" "}
        Ce temps unique, pour vous-même, vous offre l'opportunité d'aller
        explorer vos questionnements, vos incertitudes et d'ouvrir le champ des
        possibles. Mon approche est empreinte de non jugement et de respect.
      </p>
      <p class="paragraphe__fourth">
        Chacun peut traverser, à certains moments de sa vie, des difficultés, et
        ce n'est en aucun cas inéluctable. J'apporte ma sensibilité et mon
        humanité sur ce chemin parfois difficile mais tellement riche de
        possibles.
      </p>
    </section>
  );
};

export default Accompaniment;
