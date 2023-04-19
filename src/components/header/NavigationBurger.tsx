import { useModalContext } from "../../context/modalContext";
import BurgerButton from "../buttons/BurgerButton";
import "./header.scss";

function NavigationBurger() {
  const [isModalOpen, setIsModalOpen] = useModalContext();

  return (
    <div class="header__burger">
      <BurgerButton onClick={() => setIsModalOpen(!isModalOpen())} />
    </div>
  );
}

export default NavigationBurger;


