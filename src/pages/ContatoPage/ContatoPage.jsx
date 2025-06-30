import React from "react";
import styles from "./ContatoPage.module.css";

const ContatoPage = () => {
  return (
    <div className={styles["contato-page"]}>
      <h1 className={styles["contato-title"]}>Fale Conosco</h1>
      <p className={styles["contato-description"]}>
        Entre em contato com a RDG Construções para solicitar um orçamento,
        tirar dúvidas ou saber mais sobre nossos serviços. Estamos prontos para
        atender você!
      </p>
    </div>
  );
};

export default ContatoPage;
