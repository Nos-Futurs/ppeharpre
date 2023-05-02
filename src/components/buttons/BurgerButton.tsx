import burger from "../../assets/images/burger.svg";
import "./buttons.scss";

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton = (props: BurgerButtonProps) => {
  return (
    <button name="menu-button" class="burger" onclick={props.onClick}>
      <img src={burger} alt={"burger-button"} class="burger__button" />
    </button>
  );
};

export default BurgerButton;
