import { Component } from "solid-js";
import Layout from "../../layout/Layout";
import Carreer from "./carreer/Carreer";
import Ethics from "./ethics/Ethics";
import MySpecificities from "./specificities/Specificities";

const AboutMyself: Component = () => {
  return (
    <Layout>
      <MySpecificities />
      <Carreer />
      <Ethics />
    </Layout>
  );
};

export default AboutMyself;
