import { useNavigate } from "@solidjs/router";
import "./modalSideBar.scss";

import { createSignal } from "solid-js";
import { useModalContext } from "../../context/modalContext";
import DropDownLink from "../links/DropDownLink";
import SideLinks from "../links/SideLinks";

function ModalSideBar() {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = useModalContext();
  const [aboutPopup, setAboutPopup] = createSignal(false);
  const navigate = useNavigate();

  return (
    <div class="modal">
      <div class="modal__side-menu">
        <SideLinks
          name="Accueil"
          onClick={() => {
            navigate("/");
            setIsModalOpen(false);
          }}
        />
        <div class="modal__section">
          <SideLinks
            name="Accompagnement"
            onClick={() => {
              setMyMethodPopup(!myMethodPopup());
            }}
          />
          {myMethodPopup() && (
            <>
              <DropDownLink
                name="Votre accompagnement"
                color="black"
                onClick={() => {
                  navigate("/method");
                  setIsModalOpen(false);
                }}
              />
              <DropDownLink
                name="Pourquoi se faire accompagner?"
                color="black"
                onClick={() => {
                  navigate("/method#why");
                  setIsModalOpen(false);
                }}
              />
              <DropDownLink
                name="Le déroulement d'une séance"
                color="black"
                onClick={() => {
                  navigate("/method#how");
                  setIsModalOpen(false);
                }}
              />
            </>
          )}
        </div>
        <div class="modal__section">
          <SideLinks
            name="A propos de moi"
            onClick={() => {
              setAboutPopup(!aboutPopup());
            }}
          />
          {aboutPopup() && (
            <>
              <DropDownLink
                name="Mes spécificités"
                color="black"
                onClick={() => {
                  navigate("/about");
                  setIsModalOpen(false);
                }}
              />
              <DropDownLink
                name="Mon parcours"
                color="black"
                onClick={() => {
                  navigate("/about#carreer");
                  setIsModalOpen(false);
                }}
              />
              <DropDownLink
                name="Ma déontologie"
                color="black"
                onClick={() => {
                  navigate("/about#ethics");
                  setIsModalOpen(false);
                }}
              />
            </>
          )}
        </div>
        <SideLinks
          name="Gestalt thérapie"
          onClick={() => {
            navigate("/gestalt");
            setIsModalOpen(false);
          }}
        />
        <SideLinks
          name="Contactez moi"
          onClick={() => {
            navigate("/contact");
            setIsModalOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default ModalSideBar;
