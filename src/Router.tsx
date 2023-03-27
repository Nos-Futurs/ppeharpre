import { Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import AboutMyself from "./Pages/AboutMyself";
import Contact from "./Pages/Contact";
import Gestalt from "./Pages/Gestalt";
import Home from "./Pages/Home";
import MyMethod from "./Pages/MyMethod";

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
