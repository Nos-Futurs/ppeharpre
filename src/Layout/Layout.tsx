import type { JSXElement } from "solid-js";

import GlobalFooter from "../components/footer/GlobalFooter";
import GlobalHeader from "../components/header/GlobalHeader";
import "./Layout.css";

interface LayoutProps {
  children: JSXElement;
}

function Layout(props: LayoutProps) {
  return (
    <div class="layout">
      <GlobalHeader />
      {props.children}
      <GlobalFooter />
    </div>
  );
}

export default Layout;
