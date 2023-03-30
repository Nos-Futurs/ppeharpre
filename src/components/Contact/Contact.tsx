function Contact() {
  return (
    <div style={{ display: "flex", "flex-direction": "row", color: "white", width: "100%", "justify-content": "space-around"}}>
      <div style={{ display: "flex", "flex-direction": "column", "row-gap": "20px"}}>
        <div>Philippe Péharpre</div>
        <div>ph.peharpre@gmail.com</div>
        <div>+33 6 70 80 35 16</div>
      </div>
      <div style={{ display: "flex", "flex-direction": "column", "row-gap": "20px"}}>
        <div>adresse 1</div>
        <div>adresse 2</div>
        <div>adresse 3</div>
      </div>
    </div>
  );
}

export default Contact;
