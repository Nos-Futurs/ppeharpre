import { useNavigate } from '@solidjs/router';
import './header.scss';

import { Accessor, Component, Setter, createSignal } from 'solid-js';
import DropDownLink from '../links/DropDownLink';
import MenuLink from '../links/MenuLinks';

enum pages {
  HOME = 'home',
  ABOUT = 'about',
  MY_METHOD = 'myMethod',
  GESTALT = 'gestalt',
  CONTACT = 'contact',
}

interface NavigationHeaderProps {
  myMethodPopup: Accessor<boolean>;
  setMyMethodPopup: Setter<boolean>;
  aboutPopup: Accessor<boolean>;
  setAboutPopup: Setter<boolean>;
}

const NavigationHeader: Component<NavigationHeaderProps> = (
  props: NavigationHeaderProps,
) => {
  const [selectedLink, setSelectedLink] = createSignal<pages>(pages.HOME);
  return (
    <div class="header__navigation">
      <MenuLink
        name="Accueil"
        selected={selectedLink() == pages.HOME}
        href="/"
        onClick={(): void => {
          setSelectedLink(pages.HOME);
        }}
      />
      <div class="header__sections">
        <DropDownLink
          isModal={false}
          name="Accompagnement"
          selected={selectedLink() == pages.MY_METHOD}
          popup={props.myMethodPopup}
          setPopup={props.setMyMethodPopup}
          sections={[
            {
              name: 'Votre accompagnement',
              path: '/method',
              onClick: (): void => {
                setSelectedLink(pages.MY_METHOD);
                props.setMyMethodPopup(false);
              },
            },
            {
              name: 'Pourquoi se faire accompagner?',
              path: '/method#why',
              onClick: (): void => {
                setSelectedLink(pages.MY_METHOD);
                props.setMyMethodPopup(false);
              },
            },
            {
              name: "Le déroulement d'une séance",
              path: '/method#how',
              onClick: (): void => {
                setSelectedLink(pages.MY_METHOD);
                props.setMyMethodPopup(false);
              },
            },
          ]}
        />
      </div>
      <div class="header__sections">
        <DropDownLink
          isModal={false}
          name="A propos de moi"
          selected={selectedLink() == pages.ABOUT}
          popup={props.aboutPopup}
          setPopup={props.setAboutPopup}
          sections={[
            {
              name: 'Mes spécificités',
              path: '/about',
              onClick: (): void => {
                setSelectedLink(pages.ABOUT);
                props.setAboutPopup(false);
              },
            },
            {
              name: 'Mon parcours',
              path: '/about#carreer',
              onClick: (): void => {
                setSelectedLink(pages.ABOUT);
                props.setAboutPopup(false);
              },
            },
            {
              name: 'Ma déontologie',
              path: '/about#ethics',
              onClick: (): void => {
                setSelectedLink(pages.ABOUT);
                props.setAboutPopup(false);
              },
            },
          ]}
        />
      </div>
      <MenuLink
        name="Gestalt thérapie"
        selected={selectedLink() == pages.GESTALT}
        href="/gestalt"
        onClick={(): void => {
          setSelectedLink(pages.GESTALT);
        }}
      />
      <MenuLink
        name="Contactez moi"
        border={true}
        selected={selectedLink() == pages.CONTACT}
        href="/contact"
        onClick={(): void => {
          setSelectedLink(pages.CONTACT);
        }}
      />
    </div>
  );
};

export default NavigationHeader;
