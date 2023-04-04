import logo from "../../assets/images/logo.png";
import "../../sass/components/footer.scss";
import Contact from "../Contact/Contact";

function Footer() {
  return (
    <div class="footer">
      <div
        style={{
          height: "100%",
          width: "20%",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <img src={logo} style={{ "max-height": "75%" }} />
      </div>
      <div
        style={{
          width: "70%",
          margin: "0% 15% 0% 5%",
        }}
      >
        <Contact />
      </div>
    </div>
  );
}

export default Footer;
