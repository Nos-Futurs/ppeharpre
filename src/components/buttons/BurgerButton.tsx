import { Component } from "solid-js";
import burger from "../../assets/images/burger.svg";
import "./buttons.scss";

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton: Component<BurgerButtonProps> = (props: BurgerButtonProps) => {
  return (
    <button name="menu-button" class="burger" onClick={():void => {props.onClick()}}>
      <img src={burger.src} alt={"burger-button"} class="burger__button" />
    </button>
  );
};

export default BurgerButton;
