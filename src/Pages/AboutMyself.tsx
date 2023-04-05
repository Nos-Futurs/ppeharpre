import { Component } from "solid-js";
import Layout from "../layout/Layout";

import cabinet from "./../assets/images/cabinet.png";

import "../styles/pages/aboutMyself.scss";

const AboutMyself: Component = () => {
  return (
    <Layout>
      <div class="title">A propos de moi : </div>
      <div class="paragraphe">
        Je me mets au service des personnes que j'accompagne avec ma couleur et
        surtout en cohérence avec la personne que je rencontre. Un
        accompagnement est toujours une co-construction.
        <ul>
          <li>
            Je suis ancré à la terre par mon vécu familial et par la pratique
            quotidienne de la méditation. Cet ancrage est « rassurant » pour les
            personnes que j'accompagne, il allie logique et intuition.
          </li>
          <li>
            Je chemine avec la personne que j'accompagne « en posant sans
            imposer ». Le cheminement est aussi la mise en mouvement de la
            personne par une mise en conscience, physique, émotionnelle et
            intellectuelle.
          </li>
          <li>
            J'écoute, je ralentis, j'utilise les silences, j'accompagne l'autre
            dans sa propre découverte ou redécouverte. S'offrir le temps, mais
            pas prendre le temps, permet à la personne que j’accompagne d’aller
            au fond des questions qui l'interpellent et de sentir corporellement
            ce qui se passe pour elle.
          </li>
          <li>
            Tous les éléments de contexte, d'environnement sont à prendre en
            compte. Je suis vigilant, quand cela a du sens, à identifier les
            éléments de cohérence ou de lien entre les évènements.
          </li>
          <li>
            J'accompagne mes client.es dans la compréhension intellectuelle et
            émotionnelle de ce qui se passe dans leur environnement et du champ
            des possibles qui s'offrent à elleux.
          </li>
          <li>
            Je suis sensible aux enjeux de discrimination, de classe et de
            genre. J'ai une « écoute attentionnée », une approche non jugeante.
            Je rejoins la personne, où elle en est, dans le respect de son
            intimité.
          </li>
        </ul>
      </div>
      <div>
        <img src={cabinet} style={{ width: "100%" }} />
      </div>
      <div class="title" style={{ "margin-top": "200px" }}>
        parcours professionnel et de formation:{" "}
      </div>
      <div class="paragraphe">
        Dans un premier temps, j'ai eu un parcours professionnel en entreprise
        avec des responsabilités d'équipe qui m'a amené à me former au coaching
        professionnel, en 2009/2010, via une formation à HEC Paris. Depuis 2010,
        j'accompagne en coaching professionnel des cadres et des manageurs
        d'entreprise. En 2013, j'ai commencé mon parcours en gestalt thérapie à
        l'EPG. Je suis diplômé gestalt praticien depuis novembre 2022. Je
        poursuis mon parcours d'apprentissage. <br />
        Cet apprentissage implique un travail sur soi avec un thérapeute, de la
        thérapie en groupe, des formations thématiques (psychopathologie,
        sexualité, violence, deuil, questions existentielles...) et de très
        nombreux stages.
      </div>
      <div class="paragraphe">
        La pédagogie de l'EPG se caractérise par :
        <ul>
          <li>la place donnée à l'expérienciel</li>
          <li>
            l'attention particulière donnée aux processus corporels et
            émotionnels
          </li>
        </ul>
      </div>
      <div class="paragraphe">
        L'EPG (Ecole Parisienne de Gestalt) est accréditée aux niveaux national
        et européen par :{" "}
        <ul>
          <li>l'EAGT (European Association for Gestalt Therapy)</li>
          <li>l'EAP (European Association for Psychotherapy)</li>
          <li>
            la FF2P (Fédération Française de Psychothérapie et de Psychanalyse)
          </li>
        </ul>
      </div>
      <div class="paragraphe">
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

      <div class="title" style={{ "margin-top": "200px" }}>
        Ma déontologique et éthique :
      </div>
      <div class="paragraphe">
        La confidentialité et le non jugement sont nécessaires au bon
        déroulement d'un accompagnement. Je suis supervisé en groupe et
        individuellement. Je poursuis ma formation professionnelle au sein de
        l'EPG (Ecole Parisienne de Gestalt). Mes accompagnements ne sont pas
        remboursés par la sécurité sociale. Je suis signataire du code de
        déontologie de la FF2P et de l'EAP.
      </div>
    </Layout>
  );
};

export default AboutMyself;
