import './modalSideBar.scss';

import { Component, createSignal } from 'solid-js';
import { useModalContext } from '../../context/modalContext';
import CloseButton from '../buttons/CloseButton';
import DropDownLink from '../links/DropDownLink';
import SideLinks from '../links/SideLinks';

const ModalSideBar: Component = () => {
  const [myMethodPopup, setMyMethodPopup] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = useModalContext();
  const [aboutPopup, setAboutPopup] = createSignal(false);

  return (
    <div class="modal">
      <div class="modal__side-popup">
        <div class="modal__close">
          <CloseButton
            onClick={(): void => {
              setIsModalOpen(false);
            }}
          />
        </div>
        <div class="modal__side-menu">
          <SideLinks
            name="Accueil"
            href="/"
            onClick={(): void => {
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
                  name: 'Votre accompagnement',
                  color: 'black',
                  path: '/method',
                  onClick: (): void => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name: 'Pourquoi se faire accompagner?',
                  path: '/method#why',
                  color: 'black',
                  onClick: (): void => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name: "Le déroulement d'une séance",
                  path: '/method#how',
                  color: 'black',
                  onClick: (): void => {
                    setIsModalOpen(false);
                  },
                },
              ]}
            />
          </div>
          <div class="modal__section">
            <DropDownLink
              isModal={true}
              name="A propos de moi"
              selected={false}
              popup={aboutPopup}
              setPopup={setAboutPopup}
              sections={[
                {
                  name: 'Mes spécificités',
                  path: '/about',
                  color: 'black',
                  onClick: (): void => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name: 'Mon parcours',
                  path: '/about#carreer',
                  color: 'black',
                  onClick: (): void => {
                    setIsModalOpen(false);
                  },
                },
                {
                  name: 'Ma déontologie',
                  path: '/about#ethics',
                  color: 'black',
                  onClick: (): void => {
                    setIsModalOpen(false);
                  },
                },
              ]}
            />
          </div>
          <SideLinks
            name="Gestalt thérapie"
            href="/gestalt"
            onClick={(): void => {
              setIsModalOpen(false);
            }}
          />
          <SideLinks
            name="Contactez moi"
            href="/contact"
            onClick={(): void => {
              setIsModalOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSideBar;
