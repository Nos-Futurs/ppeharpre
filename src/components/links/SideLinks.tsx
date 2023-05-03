import { A } from "@solidjs/router";
import "./links.scss";

interface sideLinksProps {
  name: string;
  href:string;
  onClick: () => void;
}

// https://github.com/solidjs/solid/discussions/287
const SideLinks = (props: sideLinksProps) => {
  return (
    <A class="sideLink" href={props.href} onclick={props.onClick}>
      {props.name}
    </A>
  );
};

export default SideLinks;
