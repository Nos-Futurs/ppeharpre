import "./buttons.scss";

interface menuButtonProps {
    name: string; 
    onClick: () => void;
    border?: boolean
}

const MenuButton = ({onClick, border = false, name}: menuButtonProps) => {  
  return (
        <button
          class={border? "menuButtonBordered" : "menuButton"}
          onclick={onClick}
        >
          {name}
        </button>
        
  )
}

export default MenuButton;
