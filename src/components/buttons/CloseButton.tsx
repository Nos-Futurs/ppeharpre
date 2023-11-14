import { Component } from "solid-js";
import cross from "../../assets/images/cross.svg";
import "./buttons.scss";

interface BurgerButtonProps {
  onClick: () => void;
}

const CloseButton: Component<BurgerButtonProps> = (props: BurgerButtonProps) => {
  return (
    <button name="close-button" class="cross" onClick={():void => {props.onClick()}}>
      <img src={cross.src} alt={"close"} style={{ width: "35px" }} />
    </button>
  );
};

export default CloseButton;
