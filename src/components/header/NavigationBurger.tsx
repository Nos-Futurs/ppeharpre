import { useNavigate } from "@solidjs/router";
import burger from "../../assets/images/burger.svg";
import "./header.scss";

import { Accessor, Setter } from "solid-js";

enum pages {
  HOME = "home",
  ABOUT = "about",
  MY_METHOD = "myMethod",
  GESTALT = "gestalt",
  CONTACT = "contact",
}

interface NavigationBurgerProps {
  myMethodPopup: Accessor<boolean>;
  setMyMethodPopup: Setter<boolean>;
  aboutPopup: Accessor<boolean>;
  setAboutPopup: Setter<boolean>;
}

function NavigationBurger(props: NavigationBurgerProps) {
  const navigate = useNavigate();

  return (
    <div  style={{ "width": "100%", display: "flex", "justify-content": "flex-end", "margin-right": "5%", "align-items": "center" }}>
      <button
        style={{ "background-color": "transparent", border: "transparent" }}
      >
        <img src={burger} style={{ width: "50px" }} />
      </button>
    </div>
  );
}

export default NavigationBurger;
