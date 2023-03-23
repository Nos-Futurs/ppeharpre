import { useNavigate } from "@solidjs/router";
import "./Header.css";

function GlobalHeader() {
  const navigate = useNavigate();
  return (
    <div class="header">
      <div class="navigation">
        <button
          class="button"
          onclick={() => {
            navigate("/");
          }}
        >
          Accueil
        </button>
        <button
          class="button"
          onclick={() => {
            navigate("/method");
          }}
        >
          Accompagnement
        </button>
        <button
          class="button"
          onclick={() => {
            navigate("/gestalt");
          }}
        >
          Gestalt thérapie
        </button>
        <button
          class="button"
          onclick={() => {
            navigate("/about");
          }}
        >
          A propos de moi
        </button>
        <button
          class="button"
          onclick={() => {
            navigate("/contact");
          }}
        >
          Contactez moi
        </button>
      </div>
    </div>
  );
}

export default GlobalHeader;
