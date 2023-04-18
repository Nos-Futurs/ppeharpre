import { useNavigate } from "@solidjs/router";
import "./header.scss";

import { createEffect, createSignal } from "solid-js";
import logo from "../../assets/images/logo.png";
import DropDownLink from "../links/DropDownLink";
import MenuLink from "../links/MenuLinks";


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
  const [selectedLink, setSelectedLink] = createSignal<pages>(pages.HOME);

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
        <MenuLink
          name="Accueil"
          selected={selectedLink() == pages.HOME}
          onClick={() => {
            navigate("/");
            setSelectedLink(pages.HOME);
          }}
        />
        <div class="header__sections">
          <MenuLink
            name="Accompagnement"
            selected={selectedLink() == pages.MY_METHOD}
            onClick={() => {
              setMyMethodPopup(!myMethodPopup());
            }}
          />
          {myMethodPopup() && (
            <>
              <DropDownLink
                name="Votre accompagnement"
                onClick={() => {
                  navigate("/method");
                  setSelectedLink(pages.MY_METHOD);
                }}
              />
              <DropDownLink
                name="Pourquoi se faire accompagner?"
                onClick={() => {
                  navigate("/method#why");
                  setSelectedLink(pages.MY_METHOD);
                }}
              />
              <DropDownLink
                name="Le déroulement d'une séance"
                onClick={() => {
                  navigate("/method#how");
                  setSelectedLink(pages.MY_METHOD);
                }}
              />
            </>
          )}
        </div>
        <div class="header__sections">
          <MenuLink
            name="A propos de moi"
            selected={selectedLink() == pages.ABOUT}
            onClick={() => {
              setAboutPopup(!aboutPopup());
            }}
          />
          {aboutPopup() && (
            <>
              <DropDownLink
                name="Mes spécificités"
                onClick={() => {
                  navigate("/about");
                  setSelectedLink(pages.ABOUT);
                }}
              />
              <DropDownLink
                name="Mon parcours"
                onClick={() => {
                  navigate("/about#carreer");
                  setSelectedLink(pages.ABOUT);
                }}
              />
              <DropDownLink
                name="Ma déontologie"
                onClick={() => {
                  navigate("/about#ethics");
                  setSelectedLink(pages.ABOUT);
                }}
              />
            </>
          )}
        </div>
        <MenuLink
          name="Gestalt thérapie"
          selected={selectedLink() == pages.GESTALT}
          onClick={() => {
            navigate("/gestalt");
            setSelectedLink(pages.GESTALT);
          }}
        />
        <MenuLink
          name="Contactez moi"
          border={true}
          selected={selectedLink() == pages.CONTACT}
          onClick={() => {
            navigate("/contact");
            setSelectedLink(pages.CONTACT);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
