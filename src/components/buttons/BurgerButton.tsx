import burger from "../../assets/images/burger.svg";
import "./buttons.scss";

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton = (props: BurgerButtonProps) => {
  return (
    <button class="burger" onclick={props.onClick}>
      <img src={burger} style={{ width: "40px" }} />
    </button>
  );
};

export default BurgerButton;
