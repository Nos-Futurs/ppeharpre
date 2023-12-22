import { Component } from 'solid-js';

import trek_560 from '../../assets/images/trek/trek-560.png';
import trek_400 from '../../assets/images/trek/trek-400.png';
import trek_250 from '../../assets/images/trek/trek-250.png';
import CropedImage from '../CropedImage/CropedImage';

import './carreer.scss';

const Carreer: Component = () => {
  return (
    <section class="carreer" id="carreer">
      <h1 class="carreer__title">Parcours professionnel et formation</h1>
      <p class="carreer__paragraphe">
        J'ai eu un parcours professionnel en entreprise avec des responsabilités
        de dirigeant. Diplômé <b>coach professionnel</b> en 2010 à HEC Paris,
        j'accompagne également des cadres et des manageurs.euses. En 2013, j'ai
        commencé mon parcours en gestalt thérapie à l'EPG (
        <a id="link-EPG" href="https://www.epg-gestalt.fr/" target="_blank">
          Ecole Parisienne de Gestalt
        </a>
        ). Je suis diplômé <b>gestalt praticien.</b>
      </p>
      <div class="carreer__items-1">
        <div class="carreer__item1">
          <CropedImage
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            alt={'blank'}
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'150px'}
            height={'130px'}
          />
        </div>
        <div class="carreer__item1">
          <CropedImage
            alt={'blank'}
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'150px'}
            height={'130px'}
          />
        </div>
      </div>
      <div class="carreer__items">
        <div class="carreer__item1">
          <CropedImage
            alt={'blank'}
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'150px'}
            height={'130px'}
          />
        </div>
        <div class="carreer__item1">
          <CropedImage
            alt={'blank'}
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'150px'}
            height={'130px'}
          />
        </div>
        <div class="carreer__item2">
          <CropedImage
            alt={'blank'}
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'450px'}
            height={'120px'}
          />
        </div>
      </div>
      <p class="carreer__paragraphe">
        Cette formation implique un travail sur soi avec un.e thérapeute, de la
        thérapie en groupe, des formations thématiques (sexualité, violence,
        deuil, questions existentielles...) et en psychopathologie, et de très
        nombreux stages. <br /> <br /> La pédagogie de l'EPG se caractérise par
        la place donnée au vécu, à l'expérimentation et l'attention particulière
        donnée aux processus corporels et émotionnels
        <br /> <br /> L'EPG est accréditée aux niveaux national et européen par
        l'EAGT (European Association for Gestalt Therapy), l'EAP (European
        Association for Psychotherapy) et la FF2P.
      </p>
      <p class="carreer__paragraphe">
        <b>Je suis membre de la FF2P</b> (
        <a id="link-ff2P" href="https://www.ff2p.fr/" target="_blank">
          Fédération Française de Psychothérapie et de Psychanalyse
        </a>
        ), de{' '}
        <a
          id="link-en-contact"
          href="https://encontacts-gestalt.org/"
          target="_blank"
        >
          En Contacts
        </a>{' '}
        (Association des anciens de l'EPG) et de RGO (
        <a
          id="link-RGO"
          href="https://reseau-gestalt-ouest.asso.fr/"
          target="_blank"
        >
          Réseau Gestalt Ouest
        </a>
        ). A ce jour, je suis engagé dans des associations de soutien
        d'étudiants.es au sein de{' '}
        <a
          id="link-tous-egaux-ecole"
          href="https://tousegauxalecole.fr/"
          target="_blank"
        >
          Tous Egaux à l'Ecole
        </a>{' '}
        et de femmes dirigeantes au sein de{' '}
        <a
          id="link-Ewa-Boost"
          href="https://ewaboost.wordpress.com/"
          target="_blank"
        >
          EWA Boost
        </a>{' '}
        (ESSEC Woman Association). Je réalise des accompagnements solidaires au
        sein de l'APSoS (
        <a
          id="link-apsos"
          href="https://www.apsos.fr/"
          target="_blank"
        >
          Accès à la Psychothérapie en Soutien Social
        </a>
        ) et des écoutes au sein de l'association <a
          id="link-ecouteurs-de-rues"
          href="https://www.lesecouteursderues.com/"
          target="_blank"
        >
          Les Ecouteurs de Rues
        </a>.
      </p>
      <div class="carreer__items">
        <div class="carreer__item1">
          <CropedImage
            alt={'blank'}
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'150px'}
            height={'130px'}
          />
        </div>
        <div class="carreer__item1">
          <CropedImage
            alt={'blank'}
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'150px'}
            height={'130px'}
          />
        </div>
        <div class="carreer__item2">
          <CropedImage
            alt={'blank'}
            src={trek_560.src}
            srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
            sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
            offsetY={2}
            offsetX={2}
            zoom={8}
            width={'450px'}
            height={'120px'}
          />
        </div>
      </div>
    </section>
  );
};

export default Carreer;
