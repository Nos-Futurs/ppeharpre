import { useNavigate } from "@solidjs/router";
import "../../sass/components/header.scss";
import MenuButton from "../buttons/MenuButton";

function Header() {
  const navigate = useNavigate();
  return (
    <div class="header">
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

export default Header;
