import { Route, Router, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import { Modal } from "./components/Modal/Modal";
import { ModalProvider } from "./context/modalContext";
import AboutMyself from "./pagesComponents/AboutMyself/AboutMyself";
import Contact from "./pagesComponents/Contact/Contact";
import Gestalt from "./pagesComponents/Gestalt/Gestalt";
import Home from "./pagesComponents/Home/Home";
import Mention from "./pagesComponents/Mention/Mention";
import MyMethod from "./pagesComponents/MyMethod/MyMethod";

const AppRouter: Component = () => {
  return (
    <Router>
      <ModalProvider>
        <Modal />
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutMyself} />
            <Route path="/method" component={MyMethod} />
            <Route path="/gestalt" component={Gestalt} />
            <Route path="/contact" component={Contact} />
            <Route path="/mentions-legales" component={Mention} />
          </Routes>
      </ModalProvider>
    </Router>
  );
};

export default AppRouter;
