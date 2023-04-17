import { Component } from "solid-js";
import Layout from "../layout/Layout";
import sea_rocks from "./../assets/images/sea_rocks.png";

import CropedImage from "../components/CropedImage/CropedImage";
import "../styles/pages/home.scss";

const Home: Component = () => {
  return (
    <Layout>
      <div class="presentation">
        <div class="presentation__name">
          Philippe <br /> Péharpré
        </div>
        <div class="presentation__job">
          Praticien <br /> en Gestalt Thérapie
        </div>
      </div>
      <div class="presentation__sketch-container">
        <img src={sea_rocks} class="presentation__sketch" />
      </div>
      <div class="presentation__description">
        Accompagnement en mouvement sur le chemin de la vie
      </div>
      <div class="paragraphe__container">
        <div class="paragraphe">
          <div class="paragraphe__right">
            Nous traversons tous des moments difficiles, de questionnements, de
            remise en cause et parfois de souffrance. Je crois en la capacité de
            chacun et chacune à être serein.e, heureux.se et à faire des choix
            qui lui correspondent.
          </div>
          <div class="paragraphe__sketch-container">
            <CropedImage
              src={sea_rocks}
              offsetY={6.5}
              offsetX={3.5}
              zoom={16}
            />
          </div>
          <div class="paragraphe__left">
            Je vous accompagne dans un climat de confiance et de sécurité sur
            votre chemin de vie, dans une mise en mouvement. <br />
            Je suis à votre disposition pour vous rencontrer et vous soutenir
            sur ce chemin.
          </div>
          <div class="paragraphe__sketch-container">
            <CropedImage
              src={sea_rocks}
              offsetY={6.5}
              offsetX={1.6}
              zoom={16}
            />
          </div>
        </div>
      </div>
      <div class="presentation__sketch-container">
        <CropedImage
          src={sea_rocks}
          offsetY={9}
          offsetX={17.5}
          zoom={28}
          width={"1000px"}
          height={"150px"}
        />
      </div>
    </Layout>
  );
};

export default Home;
