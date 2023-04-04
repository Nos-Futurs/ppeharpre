import { Component } from "solid-js";
import Layout from "../layout/Layout";

import lighthouse from "./../assets/images/lighthouse.png";

import "../sass/pages/myMethod.scss";

const Gestalt: Component = () => {
  return (
    <Layout>
      <div class="title">LA GESTALT THERAPIE : </div>
      <div class="paragraphe">
        La gestalt est une branche de la psychologie qui est parfois qualifiée
        de thérapie du lien.
      </div>
      <div class="paragraphe">
        La gestalt permet
        <ul>
          <li>
            de prendre conscience de ses émotions, de les accueillir et de les
            vivre en lien avec les autres
          </li>
          <li>de vivre plus en harmonie avec soi et avec les autres</li>
        </ul>
      </div>
      <div class="paragraphe">
        La puissance de l'approche gestaltiste est de :
        <ul>
          <li>
            utiliser ce qui se passe ici et maintenant, dans le cadre sécurisé
            du cabinet,
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

      <div class="paragraphe">
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
      <div>
        <img src={lighthouse} style={{ width: "100%" }} />
      </div>
    </Layout>
  );
};

export default Gestalt;
