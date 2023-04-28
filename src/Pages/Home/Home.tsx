import { Component } from "solid-js";

import Description from "./components/Description/Description";
import Presentation from "./components/Presentation/Presentation";


const Home: Component = () => {
  return (
    <>
      <Presentation />
      <Description />
    </>
  );
};

export default Home;
