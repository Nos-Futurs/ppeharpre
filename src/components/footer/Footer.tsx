import "../../sass/components/footer.scss";
import Contact from "../Contact/Contact";

function Footer() {
  return (
    <div class="footer">
      <div
        style={{
          // "background-color": colors.blue2,
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

export default Footer;
