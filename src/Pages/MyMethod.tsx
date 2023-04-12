import { Component } from "solid-js";
import Layout from "../layout/Layout";

import Acompaniment from "../components/Acompaniment/Acompaniment";
import How from "../components/How/How";
import Why from "../components/Why/Why";
import "../styles/pages/myMethod.scss";

const MyMethod: Component = () => {
  return (
    <Layout>
      <Acompaniment />
      <Why />
      <How />
    </Layout>
  );
};

export default MyMethod;
