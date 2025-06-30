import React from "react";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <div className={styles["navbar-logo"]}>
          <a href="/">
            <img src={logo} alt="Logo RDG Construções EIRELI" height={48} />
          </a>
        </div>
        <ul className={styles["navbar-links"]}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="#obras">Obras Realizadas</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
