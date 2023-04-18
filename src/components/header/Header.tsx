import "./header.scss";

import { createEffect, createSignal } from "solid-js";
import logo from "../../assets/images/logo.png";
import NavigationBurger from "./NavigationBurger";
import NavigationHeader from "./NavigationHeader";

function Header() {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const [aboutPopup, setAboutPopup] = createSignal(false);
  const [headerSize, setHeaderSize] = createSignal(150);
  const [offsetY, setOffsetY] = createSignal(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (!myMethodPopup() && !aboutPopup()) {
      if (offsetY() < 300) {
        setHeaderSize(150 - (offsetY() * 8) / 30);
      } else {
        setHeaderSize(70);
      }
    } else {
      setHeaderSize(150);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div class="header" style={{ height: `${headerSize()}px` }}>
      <div class="header__logo-container">
        <img src={logo} class="header__logo" />
      </div>
      {window.innerWidth > 980 ? (
        <NavigationHeader
          myMethodPopup={myMethodPopup}
          setMyMethodPopup={setMyMethodPopup}
          aboutPopup={aboutPopup}
          setAboutPopup={setAboutPopup}
        />
      ) : (
        <NavigationBurger
          myMethodPopup={myMethodPopup}
          setMyMethodPopup={setMyMethodPopup}
          aboutPopup={aboutPopup}
          setAboutPopup={setAboutPopup}
        />
      )}
    </div>
  );
}

export default Header;
