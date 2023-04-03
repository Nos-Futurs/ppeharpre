import { Component } from "solid-js";
import { colors } from "../assets/colors";
import Layout from "../layout/Layout";
import sea_rocks from "./../assets/images/sea_rocks.png";

import "../sass/pages/home.scss";

const Home: Component = () => {
  return (
    <Layout>
      <div
        style={{
          width: "full",
          height: "full",
          "background-color": colors.background,
          "justify-content": "center",
          padding: "5%",
        }}
      >
        <div class="presentation">
          <div class="name">Philippe Péharpré</div>
          <div class="description">
            Praticien en Gestalt Thérapie A Saint Malo
          </div>
        </div>
        <div>
          <img src={sea_rocks} style={{ width: "100%" }} />
        </div>
        <div class="container-citation">
          <div class="citation">
            « La conscience de soi est au cœur du mieux être. »
          </div>
          <div class="author">Bessel Van der Kolk, le corps n'oublie rien</div>
        </div>
        <div class="paragraphe">
          Nous traversons tous des moments difficiles, de questionnements, de
          remise en cause et parfois de souffrance. Je crois en la capacité de
          chacun et chacune à être serein.e, heureux.se et à faire des choix qui
          lui correspondent. <br/>Je vous accompagne dans un climat de confiance et
          de sécurité sur votre chemin de vie, dans une mise en mouvement. <br/>Je
          suis à votre disposition pour vous rencontrer et vous soutenir sur ce
          chemin.
        </div>
      </div>
    </Layout>
  );
};

export default Home;
