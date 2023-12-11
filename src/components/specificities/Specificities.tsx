import { Component, createEffect } from 'solid-js';

import cabinet_800 from '../../assets/images/cabinet/cabinet-800.png';
import cabinet_600 from '../../assets/images/cabinet/cabinet-600.png';
import cabinet_400 from '../../assets/images/cabinet/cabinet-400.png';
import cabinet_250 from '../../assets/images/cabinet/cabinet-250.png';

import './specificities.scss';

const MySpecificities: Component = () => {
  createEffect(() => {
    console.log(window.innerWidth * window.devicePixelRatio);
  });
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
            Je suis{' '}
            <b>sensible aux enjeux de discrimination, de classe et de genre.</b>
          </li>
          <li>
            J'ai une « <b>écoute attentionnée</b> ».
          </li>
        </ul>
      </div>
      <figure class="my-specificities__image">
        <img
          src={cabinet_600.src}
          alt="cabinet"
          class="my-specificities__image__sketch"
          loading="lazy"
          srcset={`${cabinet_250.src} 250w, ${cabinet_400.src} 400w, ${cabinet_600.src} 600w, ${cabinet_800.src} 800w`}
          sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, (max-width: 600px) 80vw, 80vw"
        />
      </figure>
    </section>
  );
};

export default MySpecificities;
