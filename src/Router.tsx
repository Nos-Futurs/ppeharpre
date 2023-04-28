import { Route, Router, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import { Modal } from "./components/Modal/Modal";
import { ModalProvider } from "./context/modalContext";
import Layout from "./layout/Layout";
import AboutMyself from "./pages/AboutMyself/AboutMyself";
import Contact from "./pages/Contact/Contact";
import Gestalt from "./pages/Gestalt/Gestalt";
import Home from "./pages/Home/Home";
import Mention from "./pages/Mention/Mention";
import MyMethod from "./pages/MyMethod/MyMethod";

const AppRouter: Component = () => {
  return (
    <Router>
      <ModalProvider>
        <Modal />
        <Layout>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutMyself} />
            <Route path="/method" component={MyMethod} />
            <Route path="/gestalt" component={Gestalt} />
            <Route path="/contact" component={Contact} />
            <Route path="/mentions-legales" component={Mention} />
          </Routes>
        </Layout>
      </ModalProvider>
    </Router>
  );
};

export default AppRouter;
