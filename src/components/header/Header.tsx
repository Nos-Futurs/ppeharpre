import { useNavigate } from "@solidjs/router";
import MenuButton from "../buttons/MenuButton";
import "./header.scss";

import { createEffect, createSignal } from "solid-js";
import logo from "../../assets/images/logo.png";
import DropDownButton from "../buttons/DropDownButton";

enum pages {
  HOME = "home",
  ABOUT = "about",
  MY_METHOD = "myMethod",
  GESTALT = "gestalt",
  CONTACT = "contact",
}

function Header() {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const [aboutPopup, setAboutPopup] = createSignal(false);
  const [headerSize, setHeaderSize] = createSignal(150);
  const [offsetY, setOffsetY] = createSignal(0);
  const [selectedButton, setSelectedButton] = createSignal<pages>(pages.HOME);

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

  const navigate = useNavigate();
  return (
    <div class="header" style={{ height: `${headerSize()}px` }}>
      <div class="header__logo-container">
        <img src={logo} class="header__logo" />
      </div>
      <div class="header__navigation">
        <MenuButton
          name="Accueil"
          selected={selectedButton() == pages.HOME}
          onClick={() => {
            navigate("/");
            setSelectedButton(pages.HOME);
          }}
        />
        <div class="header__sections">
          <MenuButton
            name="Accompagnement"
            selected={selectedButton() == pages.MY_METHOD}
            onClick={() => {
              setMyMethodPopup(!myMethodPopup());
            }}
          />
          {myMethodPopup() && (
            <>
              <DropDownButton
                name="Votre accompagnement"
                onClick={() => {
                  navigate("/method");
                  setSelectedButton(pages.MY_METHOD);
                }}
              />
              <DropDownButton
                name="Pourquoi se faire accompagner?"
                onClick={() => {
                  navigate("/method#why");
                  setSelectedButton(pages.MY_METHOD);
                }}
              />
              <DropDownButton
                name="Le déroulement d'une séance"
                onClick={() => {
                  navigate("/method#how");
                  setSelectedButton(pages.MY_METHOD);
                }}
              />
            </>
          )}
        </div>
        <div class="header__sections">
          <MenuButton
            name="A propos de moi"
            selected={selectedButton() == pages.ABOUT}
            onClick={() => {
              setAboutPopup(!aboutPopup());
            }}
          />
          {aboutPopup() && (
            <>
              <DropDownButton
                name="Mes spécificités"
                onClick={() => {
                  navigate("/about");
                  setSelectedButton(pages.ABOUT);
                }}
              />
              <DropDownButton
                name="Mon parcours"
                onClick={() => {
                  navigate("/about#carreer");
                  setSelectedButton(pages.ABOUT);
                }}
              />
              <DropDownButton
                name="Ma déontologie"
                onClick={() => {
                  navigate("/about#ethics");
                  setSelectedButton(pages.ABOUT);
                }}
              />
            </>
          )}
        </div>
        <MenuButton
          name="Gestalt thérapie"
          selected={selectedButton() == pages.GESTALT}
          onClick={() => {
            navigate("/gestalt");
            setSelectedButton(pages.GESTALT);
          }}
        />
        <MenuButton
          name="Contactez moi"
          border={true}
          selected={selectedButton() == pages.CONTACT}
          onClick={() => {
            navigate("/contact");
            setSelectedButton(pages.CONTACT);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
