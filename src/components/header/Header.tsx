import { useNavigate } from "@solidjs/router";
import MenuButton from "../buttons/MenuButton";
import "./header.scss";

import { createEffect, createSignal } from "solid-js";
import logo from "../../assets/images/logo.png";
import DropDownButton from "../buttons/DropDownButton";

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

  const navigate = useNavigate();
  return (
    <div class="header" style={{ height: `${headerSize()}px` }}>
      <div class="header__logo-container">
        <img src={logo} class="header__logo" />
      </div>
      <div class="header__navigation">
        <MenuButton
          name="Accueil"
          onClick={() => {
            navigate("/");
          }}
        />
        <div class="header__sections">
          <MenuButton
            name="Accompagnement"
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
                }}
              />
              <DropDownButton
                name="Pourquoi se faire accompagner?"
                onClick={() => {
                  navigate("/method#why");
                }}
              />
              <DropDownButton
                name="Le déroulement d'une séance"
                onClick={() => {
                  navigate("/method#how");
                }}
              />
            </>
          )}
        </div>
        <div class="header__sections">
          <MenuButton
            name="A propos de moi"
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
                }}
              />
              <DropDownButton
                name="Mon parcours"
                onClick={() => {
                  navigate("/about#carreer");
                }}
              />
              <DropDownButton
                name="Ma déontologie"
                onClick={() => {
                  navigate("/about#ethics");
                }}
              />
            </>
          )}
        </div>
        <MenuButton
          name="Gestalt thérapie"
          onClick={() => {
            navigate("/gestalt");
          }}
        />
        <MenuButton
          name="Contactez moi"
          border={true}
          onClick={() => {
            navigate("/contact");
          }}
        />
      </div>
    </div>
  );
}

export default Header;
