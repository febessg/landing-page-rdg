import React from "react";
import styles from "./WsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

const whatsappLink = "https://wa.me/5548996733731"; // Substitua pelo número desejado

export default function WsappButton() {
  return (
    <a
      href={whatsappLink}
      className={styles.wsappButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.iconCircle}>
        <FaWhatsapp size={32} color="#fff" />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>Dúvidas? Converse com a gente</span>
      </div>
    </a>
  );
}
