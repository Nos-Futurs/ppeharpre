import "./links.scss";

interface menuLinkProps {
    name: string; 
    onClick: () => void;
    border?: boolean
    selected?: boolean
}

const MenuLink = (props: menuLinkProps) => {  
  return (
        <a
          class={props.border? "menuLinkBordered" : "menuLink"}
          onclick={props.onClick}
          style={{"font-weight": `${props.selected? "800": "500"}`}}
        >
          {props.name}
        </a>
        
  )
}

export default MenuLink;
