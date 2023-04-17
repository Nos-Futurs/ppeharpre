import "./buttons.scss";

interface menuButtonProps {
    name: string; 
    onClick: () => void
}

const MenuButton = (props: menuButtonProps) => {  
  return (
        <button
          class="submitButton"
          onclick={props.onClick}
        >
          {props.name}
        </button>
        
  )
}

export default MenuButton;
