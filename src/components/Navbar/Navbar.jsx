import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
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
