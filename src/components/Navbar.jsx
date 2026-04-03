import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <h2 className="logo" style={styles.logo}><strong>Gozem-Luxe</strong></h2>
      <div style={styles.burger} onClick={() => setOpen(!open)}>
        <div style={styles.line}></div>
        <div style={styles.line}></div>
        <div style={styles.line}></div>
      </div>

      {open && (
        <ul style={styles.menu}>
          <li><a href="/">Accueil</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/reserver">Réserver</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#c95a16",
    color: "white",
    position: "relative"
    
  },
  logo: {
    margin: 0
  },
  burger: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  line: {
    width: "25px",
    height: "3px",
    backgroundColor: "white"
  },
  menu: {
    position: "absolute",
    top: "60px",
    right: "10px",
    backgroundColor: "#6d2d0599",
    listStyle: "none",
    padding: "1rem",
    borderRadius: "8px"
  }
};

export default Navbar;