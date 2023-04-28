import sea_rocks from "@assets/images/sea_rocks.png";
import { Component } from "solid-js";

import "./presentation.scss";

const Presentation: Component = () => {
  return (
    <section id="presentation">
      <h2>
        Philippe <br /> Péharpré
      </h2>
      <h2>
        Praticien <br /> en Gestalt Thérapie <br /> Saint Malo
      </h2>
      <div class="presentation__sketch-container">
        <img src={sea_rocks} class="presentation__sketch" />
      </div>
    </section>
  );
};

export default Presentation;
