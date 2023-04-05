import "../../styles/components/buttons.scss";

interface menuButtonProps {
    name: string; 
    onClick: () => void
}

const MenuButton = (props: menuButtonProps) => {  
  return (
        <button
          class="menuButton"
          onclick={props.onClick}
        >
          {props.name}
        </button>
        
  )
}

export default MenuButton;
