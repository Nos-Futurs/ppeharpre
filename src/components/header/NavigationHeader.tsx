import { useNavigate } from "@solidjs/router";
import "./header.scss";

import { Accessor, Setter, createSignal } from "solid-js";
import DropDownLink from "../links/DropDownLink";
import MenuLink from "../links/MenuLinks";

enum pages {
  HOME = "home",
  ABOUT = "about",
  MY_METHOD = "myMethod",
  GESTALT = "gestalt",
  CONTACT = "contact",
}

interface NavigationHeaderProps {
    myMethodPopup: Accessor<boolean>;
    setMyMethodPopup: Setter<boolean>;
    aboutPopup : Accessor<boolean>;
    setAboutPopup : Setter<boolean>;
}

function NavigationHeader(props: NavigationHeaderProps) {
  const [selectedLink, setSelectedLink] = createSignal<pages>(pages.HOME);
  const navigate = useNavigate();


  return (
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
            props.setMyMethodPopup(!props.myMethodPopup());
          }}
        />
        {props.myMethodPopup() && (
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
            props.setAboutPopup(!props.aboutPopup());
          }}
        />
        {props.aboutPopup() && (
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
  );
}

export default NavigationHeader;
