import { Component } from 'solid-js';
import { useModalContext } from '../../context/modalContext';
import BurgerButton from '../buttons/BurgerButton';
import './header.scss';

const NavigationBurger: Component = () => {
  const [isModalOpen, setIsModalOpen] = useModalContext();

  return (
    <div class="header__burger">
      <BurgerButton onClick={(): void => {setIsModalOpen(!isModalOpen())}} />
    </div>
  );
};

export default NavigationBurger;
