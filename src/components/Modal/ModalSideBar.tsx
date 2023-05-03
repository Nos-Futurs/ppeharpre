import { useNavigate } from "@solidjs/router";
import "./modalSideBar.scss";

import { createSignal } from "solid-js";
import { useModalContext } from "../../context/modalContext";
import CloseButton from "../buttons/CloseButton";
import DropDownLink from "../links/DropDownLink";
import SideLinks from "../links/SideLinks";

function ModalSideBar() {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = useModalContext();
  const [aboutPopup, setAboutPopup] = createSignal(false);
  const navigate = useNavigate();

  return (
    <div class="modal">
      <div class="modal__side-popup">
        <div class="modal__close">
          <CloseButton
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
        <div class="modal__side-menu">
          <SideLinks
            name="Accueil"
            href="/"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
          <div class="modal__section">
            <DropDownLink
              isModal={true}
              name="Accompagnement"
              selected={false}
              popup={myMethodPopup}
              setPopup={setMyMethodPopup}
              sections={[
                {
                  name: "Votre accompagnement",
                  color: "black",
                  path: "/method",
                  onClick: () => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name: "Pourquoi se faire accompagner?",
                  path: "/method#why",
                  color: "black",
                  onClick: () => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name: "Le déroulement d'une séance",
                  path: "/method#how",
                  color: "black",
                  onClick: () => {
                    setIsModalOpen(false);
                  },
                },
              ]}
            />
          </div>
          <div class="modal__section">
            <DropDownLink
              isModal={true}
              name="Accompagnement"
              selected={false}
              popup={aboutPopup}
              setPopup={setAboutPopup}
              sections={[
                {
                  name: "Mes spécificités",
                  path: "/about",
                  color: "black",
                  onClick: () => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name:"Mon parcours",
                  path:"/about#carreer",
                  color: "black",
                  onClick: () => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name: "Ma déontologie",
                  path: "/about#ethics",
                  color: "black",
                  onClick: () => {
                    setIsModalOpen(false);
                  },
                },
              ]}
            />
          </div>
          <SideLinks
            name="Gestalt thérapie"
            href="/gestalt"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
          <SideLinks
            name="Contactez moi"
            href="/contact"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalSideBar;
