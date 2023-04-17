import { Component } from "solid-js";
import Layout from "../../layout/Layout";

import Accompaniment from "./Accompaniment/Accompaniment";
import How from "./How/How";
import Why from "./Why/Why";

const MyMethod: Component = () => {
  return (
    <Layout>
      <Accompaniment />
      <Why />
      <How />
    </Layout>
  );
};

export default MyMethod;
