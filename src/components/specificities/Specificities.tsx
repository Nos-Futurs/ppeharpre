import { Component } from "solid-js";

import cabinet from "../../assets/images/cabinet.png";

import "./specificities.scss";

const MySpecificities: Component = () => {
  return (
    <section class="my-specificities" id="my_specificities">
      <h1>Mes spécificités </h1>
      <div class="my-specificities__paragraphe">
        Je me mets à votre service avec mes spécificités et surtout en
        m'ajustant à vos besoins.
        <ul>
          <li>
            Les randonnées itinérantes et les baignades en eaux froides
            m'offrent <b>un ancrage proche de la nature.</b>
          </li>
          <li>
            Je pratique quotidiennement <b>la méditation.</b>
          </li>
          <li>
            Je suis{" "}
            <b>sensible aux enjeux de discrimination, de classe et de genre.</b>
          </li>
          <li>
            J'ai une « <b>écoute attentionnée</b> ».
          </li>
        </ul>
      </div>
      <figure class="my-specificities__image">
        <img
          src={cabinet.src}
          alt="cabinet"
          class="my-specificities__image__sketch"
        />
      </figure>
    </section>
  );
};

export default MySpecificities;
