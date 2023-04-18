import "./links.scss";

interface dropDownLinkProps {
    name: string; 
    onClick: () => void
}

const DropDownLink = (props: dropDownLinkProps) => {  
  return (
        <a
          class="dropDownLink"
          onclick={props.onClick}
        >
          {props.name}
        </a>
        
  )
}

export default DropDownLink;
