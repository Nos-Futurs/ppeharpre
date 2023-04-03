import type { JSXElement } from "solid-js";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

interface LayoutProps {
  children: JSXElement;
}

function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
