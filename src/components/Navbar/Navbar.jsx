import React, { useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <div className={styles["navbar-logo"]}>
          <a href="/">
            <img src={logo} alt="Logo RDG Construções EIRELI" height={48} />
          </a>
        </div>
        <button
          className={styles["menu-toggle"]}
          onClick={toggleMenu}
          aria-label="Abrir/fechar menu"
        >
          <MdMenu size={32} color="#b91c1c" />
        </button>
        <ul
          className={
            styles["navbar-links"] + (menuOpen ? " " + styles["open"] : "")
          }
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <a href="/servicos">Nossos Serviços</a>
          </li>
          <li>
            <a href="/projetos">Projetos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
