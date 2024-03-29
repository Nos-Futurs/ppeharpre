import { Component } from 'solid-js';

import trek_560 from '../../assets/images/trek/trek-560.png';
import trek_400 from '../../assets/images/trek/trek-400.png';
import trek_250 from '../../assets/images/trek/trek-250.png';
import CropedImage from '../CropedImage/CropedImage';
import './why.scss';

const Why: Component = () => {
  return (
    <section class="why" id="why">
      <h1 class="why__title">Pourquoi se faire accompagner ?</h1>
      <p class="why__paragraphe">
        Faire cette démarche, c'est vous
        <b> accorder un temps afin d'être écouté.e et soutenu.e.</b>
      </p>
      <div class="why__croped-paragraphe">
        Vous pouvez vouloir :
        <ul>
          <li>mieux connaître vos propres désirs,</li>
          <li>être en quête d'un mieux vivre au quotidien,</li>
          <li>
            améliorer vos relations avec les autres (au sein de la famille, du
            couple, de l'entreprise),
          </li>
          <li>
            mieux vivre votre équilibre vie professionnelle – vie personnelle,
          </li>
          <li>
            faire face au stress, aux angoisses, aux peurs, à l'épuisement
            professionnel, à un sentiment de rejet,
          </li>
          <li>
            trouver un sens à votre vie face aux grandes questions
            existentielles comme le sens, la solitude, la finitude, la
            responsabilité, l'imperfection,
          </li>{' '}
          <li>
            gérer une transition de vie, un déménagement, un départ à la
            retraite, un nouveau poste, un nouveau métier,
          </li>{' '}
          <li>faire face à un deuil,</li>{' '}
          <li>restaurer ou installer la confiance en vous même,</li>{' '}
          <li>apaiser une souffrance,</li> <li>initier un changement...</li>
        </ul>
      </div>
      <div class="why__sketch-container">
        <CropedImage
          alt={'mountains'}
          src={trek_560.src}
          srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
          sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
          width={'min(430px, 100%)'}
          height={'80%'}
          zoom={14.7}
          offsetX={9.9}
          offsetY={10.5}
          willChange={'right'}
        />
      </div>
      <div class="why__sketch-container-full">
        <CropedImage
          alt={'grass'}
          src={trek_560.src}
          srcSet={`${trek_250.src} 250w, ${trek_400.src} 400w, ${trek_560.src} 560w`}
          sizes="(max-width: 250px) 80vw, (max-width: 400px) 80vw, 80vw"
          width={'60%'}
          height={'70%'}
          zoom={11}
          offsetX={0.7}
          offsetY={12.7}
        />
      </div>
    </section>
  );
};

export default Why;
