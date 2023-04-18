import { Component } from "solid-js";
import Carreer from "./carreer/Carreer";
import Ethics from "./ethics/Ethics";
import MySpecificities from "./specificities/Specificities";

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
