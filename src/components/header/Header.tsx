import { useNavigate } from "@solidjs/router";
import MenuButton from "../buttons/MenuButton";
import "./header.scss";

import { createEffect, createSignal } from "solid-js";
import logo from "../../assets/images/logo.png";
import DropDownButton from "../buttons/DropDownButton";

function Header() {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const [headerSize, setHeaderSize] = createSignal(170);
  const [offsetY, setOffsetY] = createSignal(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (!myMethodPopup()) {
      if (offsetY() < 300) {
        setHeaderSize(170 - offsetY() / 3);
      } else {
        setHeaderSize(70);
      }
    } else {
      setHeaderSize(170);
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
                name="Mon accompagnement"
                onClick={() => {
                  navigate("/method#accompaniment");
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
        <MenuButton
          name="A propos de moi"
          onClick={() => {
            navigate("/about");
          }}
        />
        <MenuButton
          name="Gestalt thérapie"
          onClick={() => {
            navigate("/gestalt");
          }}
        />
        <MenuButton
          name="Contactez moi"
          onClick={() => {
            navigate("/contact");
          }}
        />
      </div>
    </div>
  );
}

export default Header;
