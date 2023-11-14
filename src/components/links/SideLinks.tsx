import { A } from '@solidjs/router';
import './links.scss';
import { Component } from 'solid-js';

interface sideLinksProps {
  name: string;
  href: string;
  onClick: () => void;
}

// https://github.com/solidjs/solid/discussions/287
const SideLinks: Component<sideLinksProps> = (props: sideLinksProps) => {
  return (
    <a
      class="sideLink"
      href={props.href}
      onClick={(): void => {
        props.onClick();
      }}
    >
      {props.name}
    </a>
  );
};

export default SideLinks;
