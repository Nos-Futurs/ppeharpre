import "./buttons.scss";

interface SubmitButtonProps {
    name: string; 
    onClick: () => void
}

const SubmitButton = (props: SubmitButtonProps) => {  
  return (
        <button
          class="submitButton"
          onclick={props.onClick}
        >
          {props.name}
        </button>
        
  )
}

export default SubmitButton;
