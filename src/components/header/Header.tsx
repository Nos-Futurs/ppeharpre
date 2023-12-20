import './header.scss';

import { Component, createEffect, createSignal } from 'solid-js';
import logo from '../../assets/images/logo.png';
import NavigationHeader, { pages } from './NavigationHeader';
import NavigationBurger from './NavigationBurger';

interface HeaderProps {
  page: pages;
}
export const Header: Component<HeaderProps> = (props: HeaderProps) => {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const [aboutPopup, setAboutPopup] = createSignal(false);
  const [headerSize, setHeaderSize] = createSignal(150);
  const [offsetY, setOffsetY] = createSignal(0);

  const handleScroll = (): void => {
    setOffsetY(window.scrollY);
  };

  createEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (!myMethodPopup() && !aboutPopup()) {
      if (offsetY() < 300) {
        setHeaderSize(150 - (offsetY() * 8) / 30);
      } else {
        setHeaderSize(70);
      }
    } else {
      setHeaderSize(150);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div class="header" style={{ height: `${headerSize()}px` }}>
      <figure class="header__logo-container">
        <img src={logo.src} alt="logo" class="header__logo" />
      </figure>
      <NavigationHeader
        page={props.page}
        myMethodPopup={myMethodPopup}
        setMyMethodPopup={setMyMethodPopup}
        aboutPopup={aboutPopup}
        setAboutPopup={setAboutPopup}
      />
      <NavigationBurger />
    </div>
  );
};
