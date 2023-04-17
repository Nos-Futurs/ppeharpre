import { Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import AboutMyself from "../src/pages/AboutMyself/AboutMyself";
import Contact from "./pages/Contact";
import Gestalt from "./pages/Gestalt";
import Home from "./pages/Home";
import MyMethod from "./pages/MyMethod/MyMethod";

const AppRouter: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutMyself} />
        <Route path="/method" component={MyMethod} />
        <Route path="/gestalt" component={Gestalt} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
