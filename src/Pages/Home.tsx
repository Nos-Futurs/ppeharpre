import { Component } from "solid-js";
import Layout from "../layout/Layout";
import sea_rocks from "./../assets/images/sea_rocks.png";

import "../styles/pages/home.scss";

const Home: Component = () => {
  return (
    <Layout>
      <div class="presentation">
        <div class="presentation__name">Philippe Péharpré</div>
        <div class="presentation__job">Praticien en Gestalt Thérapie</div>
        <div class="presentation__description">
          Accompagnement en mouvement sur le chemin de la vie <br /> A Saint
          Malo
        </div>
      </div>
      <div class="presentation__sketch-container">
        <img src={sea_rocks} class="presentation__sketch" />
      </div>
      <div class="citation">
        <div class="citation__text">
          « La conscience de soi est au cœur du mieux être. »
        </div>
        <div class="citation__author">
          Bessel Van der Kolk, <u>Le corps n'oublie rien</u>
        </div>
      </div>
      <div class="paragraphe">
        Nous traversons tous des moments difficiles, de questionnements, de
        remise en cause et parfois de souffrance. Je crois en la capacité de
        chacun et chacune à être serein.e, heureux.se et à faire des choix qui
        lui correspondent. <br />
        Je vous accompagne dans un climat de confiance et de sécurité sur votre
        chemin de vie, dans une mise en mouvement. <br />
        Je suis à votre disposition pour vous rencontrer et vous soutenir sur ce
        chemin.
      </div>
    </Layout>
  );
};

export default Home;
