import cross from "../../assets/images/cross.svg";
import "./buttons.scss";

interface BurgerButtonProps {
  onClick: () => void;
}

const CloseButton = (props: BurgerButtonProps) => {
  return (
    <button class="cross" onclick={props.onClick}>
      <img src={cross} style={{ width: "35px" }} />
    </button>
  );
};

export default CloseButton;
