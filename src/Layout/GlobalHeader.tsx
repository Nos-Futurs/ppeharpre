import { useNavigate } from "@solidjs/router";
import "./Header.css";

function GlobalHeader() {
  const navigate = useNavigate();
  return (
    <div class="header">
      <div class="navigation">
        <button
          onclick={() => {
            navigate("/");
          }}
        >
          Accueil
        </button>
        <button
          onclick={() => {
            navigate("/method");
          }}
        >
          Method
        </button>
        <button
          onclick={() => {
            navigate("/about");
          }}
        >
          About
        </button>
        <button
          onclick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default GlobalHeader;
