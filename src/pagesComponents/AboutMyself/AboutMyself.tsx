import { Component } from "solid-js";
import Carreer from "./components/carreer/Carreer";
import Ethics from "./components/ethics/Ethics";
import MySpecificities from "./components/specificities/Specificities";

const AboutMyself: Component = () => {
  return (
    <>
      <MySpecificities />
      <Carreer />
      <Ethics />
    </>
  );
};

export default AboutMyself;
