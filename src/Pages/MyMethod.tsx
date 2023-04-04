import { Component } from "solid-js";
import Layout from "../layout/Layout";

import sea_rocks from "./../assets/images/sea_rocks.png";

import "../sass/pages/myMethod.scss";

const MyMethod: Component = () => {
  return (
    <Layout>
      <div class="title">Mon Accompagnement :</div>
      <div class="paragraphe">
        J'accompagne des personnes sur leur chemin de vie et je les aide à se
        mettre en mouvement. J'aime la marche, elle symbolise bien ce mouvement
        rythmé lent, régulier qui nécessite de respirer et de prendre soin de
        son corps tout en étant à l’écoute de l’environnement.
        <br />
        Je crois fondamentalement en l'humain, en sa capacité de créativité, en
        son énergie vitale.
      </div>
      <div class="paragraphe">
        Grâce aux gestalt thérapeutes qui m'ont accompagné.es ces dernière
        années, j'ai connu des transformations épanouissantes. Je me suis alors
        engagé à mon tour dans l’accompagnement en suivant la formation très
        enrichissante de cette école. La gestalt thérapie appréhende la personne
        dans sa globalité et dans son environnement sans jugement (lien). Elle
        repose sur le lien entre l’accompagné et le thérapeute et s’ancre dans
        le présent pour questionner l’ensemble du vécu.
      </div>
      <div>
        <img src={sea_rocks} style={{ width: "100%" }} />
      </div>
      <div class="paragraphe">
        Profondément respectueux des personnes, je m’attache à être à l’écoute,
        non seulement des mots mais également des images, du corps et des
        émotions avec une « très grande qualité de présence ». Mon ancrage
        rassure. Il permet à la personne accompagnée une mise en mouvement et un
        espace protégé pour contacter ses sensations et ses émotions. Ce temps
        unique pour soi offre l'opportunité d'aller explorer ses
        questionnements, ses incertitudes et d'ouvrir le champ des possibles.
        J'accompagne avec une approche non jugeante dans le respect de la
        personne.
      </div>
      <div class="paragraphe">
        Je suis aussi sur mon chemin de vie. J'ai découvert qu'avoir des
        angoisses, des difficultés à communiquer, à se faire confiance, des
        idées fixes… tout cela est partagé par de nombreux individus et en même
        temps, ce n'est en aucun cas inéluctable. Comme cela a été le cas pour
        moi, j'apporte ma sensibilité et mon humanité sur un chemin parfois
        difficile mais tellement riche de promesses et de mieux être.
      </div>
      <div class="title" style={{ "margin-top": "200px" }}>
        Pourquoi se faire accompagner ?
      </div>
      <div class="paragraphe">
        Une personne qui décide d'être accompagnée s'accorde un temps pour elle
        afin d'être écoutée et soutenue. Elles veulent être{" "}
        <ul>
          <li>
            plus en conscience de ce qui se joue pour elle et pour leur
            environnement,
          </li>
          <li>mieux connaître leurs propres désirs,</li>
          <li>mieux se sentir au quotidien.</li>
        </ul>
      </div>
      <div class="paragraphe">
        Les besoins des personnes qui viennent me voir peuvent être :{" "}
        <ul>
          <li>
            améliorer leur lien aux autres (au sein de la famille, du couple, de
            l'entreprise)
          </li>
          <li>
            mieux vivre leur équilibre vie professionnelle – vie personnelle.
          </li>
          <li>
            faire face à leur stress, leurs angoisses, leurs peurs, à
            l'épuisement professionnel, à un sentiment de rejet.
          </li>
          <li>être en quête d'un mieux vivre</li>{" "}
          <li>
            trouver leur propre sens à la vie face aux grandes questions
            existentielles (le sens, la solitude, la finitude, la
            responsabilité, l'imperfection)
          </li>{" "}
          <li>
            gérer une transition de vie, un déménagement, un départ à la
            retraite, un nouveau poste, un nouveau métier
          </li>{" "}
          <li>faire face à un deuil</li>{" "}
          <li>restaurer ou installer une confiance en elle même</li>{" "}
          <li>apaiser une souffrance . initier un changement</li>
        </ul>
      </div>
      <div class="title" style={{ "margin-top": "200px" }}>
        Comment cela se déroule un accompagnement ?
      </div>
      <div class="paragraphe">
        Les séances se déroulent dans le cadre sécurisé de mon cabinet. Elles
        durent autour de 50mns et sont habituellement hebdomadaires ou bi
        mensuelles. <br />
        Les séances se font en individuel. <br />
        J'accompagne uniquement des adultes.
      </div>
    </Layout>
  );
};

export default MyMethod;
