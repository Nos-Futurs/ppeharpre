import { Component } from "solid-js";
import { colors } from "../assets/colors";
import Layout from "../layout/Layout";


const Home: Component = () => {
  return (
    <Layout>
      <div style = {{padding:"40px", width: "full", height:"100vh", "background-color": colors.lightYellow2}}>Home !</div>
    </Layout>
  );
};

export default Home;
