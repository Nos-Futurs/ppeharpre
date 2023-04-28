import { Component } from "solid-js";

import "./how.scss";

const How: Component = () => {
  return (
    <div class="how" id="how">
      <div class="how__title">Comment se déroule un accompagnement ?</div>
      <div class="how__paragraphe">
        Les séances ont lieu dans mon cabinet, elles durent 50mns et elles sont
        habituellement hebdomadaires ou toutes les 2 semaines. Elles sont
        facturées 60 euros sauf situations particulières. <br />
        J'accompagne des adultes en individuel.
      </div>
    </div>
  );
};

export default How;
