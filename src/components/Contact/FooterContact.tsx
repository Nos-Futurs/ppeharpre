import { A, useNavigate } from "@solidjs/router";
import "./footerContact.scss";

function FooterContact() {
  const navigate = useNavigate();
  return (
    <div class="contact-info">
      <div class="contact-info__person">
        <div>Philippe Péharpré</div>
        <A href="mailto:ph.peharpre@gmail.com" style={{ color: "white" }}>
          contact.peharpre@gmail.com
        </A>
        <div>06 07 79 62 12</div>
      </div>
      <div class="contact-info__adress">
        <div>8 Bld Villebois Mareuil</div>
        <div>35 400 Saint Malo</div>
        <A href="/mentions-legales">Mentions légales</A>
      </div>
    </div>
  );
}

export default FooterContact;
