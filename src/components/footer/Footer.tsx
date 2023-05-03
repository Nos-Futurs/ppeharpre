import logo from "../../assets/images/logo.png";
import FooterContact from "../Contact/FooterContact";
import "./footer.scss";

function Footer() {
  return (
    <div class="footer">
      <figure class="footer__logo-container">
        <img src={logo} alt={"logo"} class="footer__logo" />
      </figure>
      <div class="footer__contact-container">
        <FooterContact />
      </div>
    </div>
  );
}

export default Footer;
