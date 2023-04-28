import sea_rocks from "@assets/images/sea_rocks.png";
import { Component } from "solid-js";

import CropedImage from "../../components/CropedImage/CropedImage";
import "./home.scss";

const Home: Component = () => {
  return (
    <section>
      <div class="presentation">
        <div class="presentation__name">
          Philippe <br /> Péharpré
        </div>
        <div class="presentation__job">
          Praticien <br /> en Gestalt Thérapie <br /> Saint Malo
        </div>
      </div>
      <div class="presentation__sketch-container">
        <img src={sea_rocks} class="presentation__sketch" />
      </div>
      <h1>
        Accompagnement sur votre chemin de vie
      </h1>
      <div class="paragraphe__container">
        <div class="paragraphe">
          <p class="right-paragraphe">
            <b>
              Je crois en la capacité de chacun.e à vivre sereinement, en
              harmonie et à faire des choix qui lui correspondent. 
            </b>
            Nous traversons tous.tes des moments difficiles, de questionnements,
            de remise en cause voire de souffrance. Etre accompagné.e dans ces
            moments-là peut être d'une grande aide.
          </p>
          <div class="paragraphe__sketch-container">
            <CropedImage
              src={sea_rocks}
              offsetY={6.5}
              offsetX={3.5}
              zoom={16}
            />
          </div>
          <p class="left-paragraphe">
            Je suis à votre disposition pour vous rencontrer, vous soutenir sur
            ce chemin et cela dans un climat de pleine confiance.
          </p>
          <div class="paragraphe__sketch-container">
            <CropedImage
              src={sea_rocks}
              offsetY={6.5}
              offsetX={1.6}
              zoom={16}
            />
          </div>
        </div>
      </div>
      <div class="presentation__sketch-croped">
        <CropedImage
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

export default Home;
