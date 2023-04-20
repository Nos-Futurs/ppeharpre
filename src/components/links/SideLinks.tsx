import "./links.scss";

interface sideLinksProps {
    name: string; 
    onClick: () => void;
}

// https://github.com/solidjs/solid/discussions/287
const SideLinks = (props: sideLinksProps) => {  
  return (
        <a
          class="sideLink"
          onclick={props.onClick}
        >
          {props.name}
        </a>
        
  )
}

export default SideLinks;
