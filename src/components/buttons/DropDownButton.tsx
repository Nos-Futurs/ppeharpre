import "./buttons.scss";

interface dropDownButtonProps {
    name: string; 
    onClick: () => void
}

const DropDownButton = (props: dropDownButtonProps) => {  
  return (
        <button
          class="dropDownButton"
          onclick={props.onClick}
        >
          {props.name}
        </button>
        
  )
}

export default DropDownButton;
