import { Component } from "solid-js";
import "./links.scss";

interface MenuLinkProps {
  name: string;
  href: string;
  border?: boolean;
  selected?: boolean;
}

// https://github.com/solidjs/solid/discussions/287
const MenuLink: Component<MenuLinkProps> = (props: MenuLinkProps) => {
  return (
    <a
      class={props.border ? "menuLinkBordered" : "menuLink"}
      href={props.href}
      style={{ "font-weight": `${props.selected ? "800" : "500"}` }}
    >
      {props.name}
    </a>
  );
};

export default MenuLink;
