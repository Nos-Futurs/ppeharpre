import { Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import { ModalProvider } from "./context/modalContext";
import Layout from "./layout/Layout";
import AboutMyself from "./pages/AboutMyself/AboutMyself";
import Contact from "./pages/Contact";
import Gestalt from "./pages/Gestalt";
import Home from "./pages/Home";
import MyMethod from "./pages/MyMethod/MyMethod";

const AppRouter: Component = () => {
  return (
    <Router>
      <ModalProvider>
        <Layout>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutMyself} />
            <Route path="/method" component={MyMethod} />
            <Route path="/gestalt" component={Gestalt} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </Layout>
      </ModalProvider>
    </Router>
  );
};

export default AppRouter;
