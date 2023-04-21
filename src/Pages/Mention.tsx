import { Component } from "solid-js";

import "../styles/pages/home.scss";

const Mention: Component = () => {
  return (
    <div>
      <hgroup>
        <h1>Mentions légales</h1>
        <p>En vigueur au 21/04/2023</p>
      </hgroup>
      <p>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l""Utilisateur", du site test.com , ci-après le
        "Site", les présentes mentions légales. <br />La connexion et la navigation
        sur le Site par l’Utilisateur implique acceptation intégrale et sans
        réserve des présentes mentions légales. Ces dernières sont accessibles
        sur le Site à la rubrique « Mentions légales ».
      </p>
      <h2>ARTICLE 1 - L'EDITEUR</h2>
      <p>
        L'édition du Site est assurée par Nos-Futurs SAS au capital de 500
        euros, immatriculée au Registre du Commerce et des Sociétés de Paris
        sous le numéro 920 747 698 dont le siège social est situé au 10 Villa du
        Bel-Air, 75012 Paris, <br />Adresse e-mail : nos-futurs@proton.me.<br />ci-après
        l'"Editeur".
      </p>
      <h2>ARTICLE 2 - L'HEBERGEUR</h2>
      <p>
        L'hébergeur du Site est la société OVH, dont le siège social est situé
        au 2, Rue Kellermann 59100 Roubaix.
      </p>
      <h2>ARTICLE 3 - ACCES AU SITE</h2>
      <p>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance. <br />En cas de modification, interruption ou
        suspension du Site, l'Editeur ne saurait être tenu responsable.
      </p>
      <h2> ARTICLE 4 - COLLECTE DES DONNEES</h2>
      <p>
        {" "}
        Le Site assure à l’Utilisateur une collecte et un traitement
        d’informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l’informatique, aux fichiers et aux libertés. En vertu de la loi
        Informatique et Libertés, en date du 6 janvier 1978, l’Utilisateur
        dispose d’un droit d’accès, de rectification, de suppression et
        d’opposition de ses données personnelles. L’Utilisateur exerce ce droit
        : via un formulaire de contact ; <br />Toute utilisation, reproduction,
        diffusion, commercialisation, modification de toute ou partie du Site,
        sans autorisation de l’Editeur est prohibée et pourra entraînée des
        actions et poursuites judiciaires telles que notamment prévues par le
        Code de la propriété intellectuelle et le Code civil.
      </p>
    </div>
  );
};

export default Mention;
