import "./buttons.scss";

interface menuButtonProps {
    name: string; 
    onClick: () => void;
    border?: boolean
    selected?: boolean
}

const MenuButton = (props: menuButtonProps) => {  
  return (
        <button
          class={props.border? "menuButtonBordered" : "menuButton"}
          onclick={props.onClick}
          style={{"font-weight": `${props.selected? "800": "500"}`}}
        >
          {props.name}
        </button>
        
  )
}

export default MenuButton;
