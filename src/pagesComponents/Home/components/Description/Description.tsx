import sea_rocks from "@assets/images/sea_rocks.png";
import { Component } from "solid-js";

import CropedImage from "../../../../components/CropedImage/CropedImage";
import "./description.scss";

const Description: Component = () => {
  return (
    <section id="description">
      <h1 id="section-title">Accompagnement sur votre chemin de vie</h1>
      <p class="paragraphe__left">
        <b>
          Je crois en la capacité de chacun.e à vivre sereinement, en harmonie
          et à faire des choix qui lui correspondent.
        </b>
        &nbsp; Nous traversons tous.tes des moments difficiles, de
        questionnements, de remise en cause voire de souffrance. Etre
        accompagné.e dans ces moments-là peut être d'une grande aide.
      </p>
      <div class="shoes-sketch">
        <CropedImage
          alt={"right-show"}
          src={sea_rocks}
          offsetY={6.5}
          offsetX={3.5}
          zoom={16}
        />
      </div>
      <p class="paragraphe__right">
        Je suis à votre disposition pour vous rencontrer, vous soutenir sur ce
        chemin et cela dans un climat de pleine confiance.
      </p>
      <div class="shoes-sketch">
        <CropedImage
          alt={"left-show"}
          src={sea_rocks}
          offsetY={6.5}
          offsetX={1.6}
          zoom={16}
        />
      </div>
      <div class="sketch-croped">
        <CropedImage
          alt={"blank"}
          src={sea_rocks}
          offsetY={9}
          offsetX={17.5}
          zoom={28}
          width={"1000px"}
          height={"150px"}
        />
      </div>
    </section>
  );
};

export default Description;
