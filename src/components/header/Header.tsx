import { useNavigate } from "@solidjs/router";
import MenuButton from "../buttons/MenuButton";
import "./header.scss";

import { createSignal } from "solid-js";
import logo from "../../assets/images/logo.png";
import DropDownButton from "../buttons/DropDownButton";

function Header() {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const navigate = useNavigate();
  return (
    <div class="header">
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
