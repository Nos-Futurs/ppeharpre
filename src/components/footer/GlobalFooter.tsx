import { colors } from "../../assets/colors";
import "./Footer.css";

function GlobalFooter() {
  return (
    <div class="footer" style={{ "background-color": colors.blue0 }}>
      <div
        style={{ display: "flex", "flex-direction": "column", padding: "3%", width: "100%" }}
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
      </div>
    </div>
  );
}

export default GlobalFooter;
