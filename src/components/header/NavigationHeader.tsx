import './header.scss';

import { Accessor, Component, Setter } from 'solid-js';
import DropDownLink from '../links/DropDownLink';
import MenuLink from '../links/MenuLinks';

export enum pages {
  HOME = 'home',
  ABOUT = 'about',
  MY_METHOD = 'myMethod',
  GESTALT = 'gestalt',
  CONTACT = 'contact',
  MENTION_LEGALES = "mention-legales"
}

interface NavigationHeaderProps {
  myMethodPopup: Accessor<boolean>;
  setMyMethodPopup: Setter<boolean>;
  aboutPopup: Accessor<boolean>;
  setAboutPopup: Setter<boolean>;
  page: pages;
}

const NavigationHeader: Component<NavigationHeaderProps> = (
  props: NavigationHeaderProps,
) => {
  return (
    <div class="header__navigation">
      <MenuLink
        name="Accueil"
        selected={props.page == pages.HOME}
        href="/"
      />
      <div class="header__sections">
        <DropDownLink
          isModal={false}
          name="Accompagnement"
          selected={props.page == pages.MY_METHOD}
          popup={props.myMethodPopup}
          setPopup={props.setMyMethodPopup}
          sections={[
            {
              name: 'Votre accompagnement',
              path: '/method',
              onClick: (): void => {
                props.setMyMethodPopup(false);
              },
            },
            {
              name: 'Pourquoi se faire accompagner?',
              path: '/method#why',
              onClick: (): void => {
                props.setMyMethodPopup(false);
              },
            },
            {
              name: "Le déroulement d'une séance",
              path: '/method#how',
              onClick: (): void => {
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
          selected={props.page == pages.ABOUT}
          popup={props.aboutPopup}
          setPopup={props.setAboutPopup}
          sections={[
            {
              name: 'Mes spécificités',
              path: '/about',
              onClick: (): void => {
                props.setAboutPopup(false);
              },
            },
            {
              name: 'Mon parcours',
              path: '/about#carreer',
              onClick: (): void => {
                props.setAboutPopup(false);
              },
            },
            {
              name: 'Ma déontologie',
              path: '/about#ethics',
              onClick: (): void => {
                props.setAboutPopup(false);
              },
            },
          ]}
        />
      </div>
      <MenuLink
        name="Gestalt thérapie"
        selected={props.page == pages.GESTALT}
        href="/gestalt"
      />
      <MenuLink
        name="Contactez moi"
        border={true}
        selected={props.page == pages.CONTACT}
        href="/contact"
      />
    </div>
  );
};

export default NavigationHeader;
