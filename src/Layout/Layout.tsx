import type { JSXElement } from "solid-js";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../styles/layout/layout.scss";

interface LayoutProps {
  children: JSXElement;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
        <div class="layout">{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
