import React from "react";
import styles from "./WsappButton.module.css";

const whatsappLink = "https://wa.me/5599999999999"; // Substitua pelo número desejado

export default function WsappButton() {
  return (
    <a
      href={whatsappLink}
      className={styles.wsappButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.iconCircle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.13 0-4.19-.62-5.93-1.79l-.42-.27-4.27 1.37 1.4-4.14-.28-.43A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.38c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.16 1.82.1.56-.07 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
        </svg>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>Dúvidas? Converse com a gente</span>
      </div>
    </a>
  );
}
