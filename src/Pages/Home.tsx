import { Component } from "solid-js";
import { colors } from "../assets/colors";
import Layout from "../layout/Layout";

import "./pagesCss/home.css";

const Home: Component = () => {
  return (
    <Layout>
      <div
        style={{
          width: "full",
          height: "full",
          "background-color": colors.lightYellow2,
          "justify-content": "center",
          padding: "5%",
        }}
      >
        <div class="name">Philippe PEHARPRE</div>
        <div
          style={{
            height: "400px",
            "background-color": colors.blue2,
          }}
        >
          IMAGE !!{" "}
        </div>
        <div class="citation">"Quand le sage montre la Lune, l’idiot regarde le doigt."</div>
        <div class="paragraphe">
          Ma proposition : Nous traversons tous des moments difficiles, de
          questionnements, de remise en cause et parfois de souffrance. Et je
          crois en la capacité de chacun à être serein, heureux et à faire ses
          propres choix. Je vous accompagne dans un climat de confiance et de
          sécurité sur votre chemin de vie et dans cette mise en mouvement. Je
          suis à votre disposition pour vous rencontrer et vous soutenir sur ce
          chemin.
        </div>
      </div>
    </Layout>
  );
};

export default Home;
