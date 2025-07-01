import React from "react";
import styles from "./ProjetosCard.module.css";

const ProjetosCard = ({ imagem, titulo, descricao }) => {
  return (
    <li className={styles["projeto-item"]}>
      <img
        src={imagem}
        alt={titulo}
        className={styles["projeto-img"]}
        width={120}
        height={90}
      />
      <div className={styles["projeto-info"]}>
        <span className={styles["projeto-titulo"]}>{titulo}</span>
        <span className={styles["projeto-descricao"]}>{descricao}</span>
      </div>
    </li>
  );
};

export default ProjetosCard;
