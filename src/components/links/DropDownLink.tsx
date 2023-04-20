import "./links.scss";

interface dropDownLinkProps {
    name: string; 
    onClick: () => void
    color?: string
}

const DropDownLink = (props: dropDownLinkProps) => {  
  return (
        <a
          class="dropDownLink"
          onclick={props.onClick}
          style={{color: `${props.color? props.color: "white"}`}}
        >
          {props.name}
        </a>
        
  )
}

export default DropDownLink;
