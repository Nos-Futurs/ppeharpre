import type { JSXElement } from "solid-js";

import GlobalFooter from "../components/footer/GlobalFooter";
import GlobalHeader from "../components/header/GlobalHeader";

interface LayoutProps {
  children: JSXElement;
}

function Layout(props: LayoutProps) {
  return (
    <div>
      <GlobalHeader />
      {props.children}
      <GlobalFooter />
    </div>
  );
}

export default Layout;
