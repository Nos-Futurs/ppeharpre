import { Component } from "solid-js";

import Accompaniment from "./Accompaniment/Accompaniment";
import How from "./How/How";
import Why from "./Why/Why";

const MyMethod: Component = () => {
  return (
    <>
      <Accompaniment />
      <Why />
      <How />
    </>
  );
};

export default MyMethod;
