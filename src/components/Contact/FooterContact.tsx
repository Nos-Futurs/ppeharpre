import { useNavigate } from "@solidjs/router";
import "./footerContact.scss";

function FooterContact() {
  const navigate = useNavigate();
  return (
    <div class="contact-info">
      <div class="contact-info__person">
        <div>Philippe Péharpre</div>
        <a href="mailto:ph.peharpre@gmail.com" style={{ color: "white" }}>
          ph.peharpre@gmail.com
        </a>
        <div>+33 6 70 80 35 16</div>
      </div>
      <div class="contact-info__adress">
        <div>8 Boulevard Villebois Mareuil</div>
        <div>35 400, Saint Malo</div>
        <a onclick={() => navigate("/mentions-legales")}>Mentions légales</a>
      </div>
    </div>
  );
}

export default FooterContact;
