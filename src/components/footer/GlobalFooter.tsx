import { colors } from "../../assets/colors";
import Contact from "../Contact/Contact";
import "./Footer.css";

function GlobalFooter() {
  return (
    <div
      class="footer"
      style={{
        "background-color": colors.blue0,
        "column-gap": "10%",
        "justify-content": "center",
      }}
    >
      <div
        style={{
          "background-color": colors.blue2,
          display: "flex",
          height: "100%",
          width: "10%",
        }}
      >
        Logo
      </div>
      <div
        style={{
          width: "70%",
        }}
      >
        <Contact />
      </div>
    </div>
  );
}

export default GlobalFooter;
