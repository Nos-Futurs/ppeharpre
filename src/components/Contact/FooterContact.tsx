import { useNavigate } from "@solidjs/router";
import "./footerContact.scss";

function FooterContact() {
  const navigate = useNavigate();
  return (
    <div class="contact-info">
      <div class="contact-info__person">
        <div>Philippe Péharpré</div>
        <a href="mailto:ph.peharpre@gmail.com" style={{ color: "white" }}>
          contact.peharpre@gmail.com
        </a>
        <div>06 07 79 62 12</div>
      </div>
      <div class="contact-info__adress">
        <div>8 Bld Villebois Mareuil</div>
        <div>35 400 Saint Malo</div>
        <a onclick={() => navigate("/mentions-legales")}>Mentions légales</a>
      </div>
    </div>
  );
}

export default FooterContact;
