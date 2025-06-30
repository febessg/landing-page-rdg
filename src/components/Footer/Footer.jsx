import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-row"]}>
        <span className={styles["footer-brand"]}>RDG Construções LTDA</span>
        <span style={{ fontSize: "1.3rem", marginLeft: 4 }}>&reg;</span>
      </div>
      <div className={styles["footer-since"]}>Since 2016</div>
    </footer>
  );
};

export default Footer;
