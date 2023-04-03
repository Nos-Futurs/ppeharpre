import { useNavigate } from "@solidjs/router";
import { colors } from "../../assets/colors";
import MenuButton from "../buttons/MenuButton";
import "./Header.scss";

function GlobalHeader() {
  const navigate = useNavigate();
  return (
    <div class="header" style={{ "background-color": colors.blue0 }}>
      <div class="navigation">
        <MenuButton
          name="Accueil"
          onClick={() => {
            navigate("/");
          }}
        />
        <MenuButton
          name="Accompagnement"
          onClick={() => {
            navigate("/method");
          }}
        />
        <MenuButton
          name="Gestalt thérapie"
          onClick={() => {
            navigate("/gestalt");
          }}
        />
        <MenuButton
          name="A propos de moi"
          onClick={() => {
            navigate("/about");
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

export default GlobalHeader;
