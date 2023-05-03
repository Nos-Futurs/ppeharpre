import { A } from "@solidjs/router";
import "./links.scss";

interface menuLinkProps {
  name: string;
  href: string;
  onClick: () => void;
  border?: boolean;
  selected?: boolean;
}

// https://github.com/solidjs/solid/discussions/287
const MenuLink = (props: menuLinkProps) => {
  return (
    <A
      class={props.border ? "menuLinkBordered" : "menuLink"}
      href={props.href}
      onclick={props.onClick}
      style={{ "font-weight": `${props.selected ? "800" : "500"}` }}
    >
      {props.name}
    </A>
  );
};

export default MenuLink;
