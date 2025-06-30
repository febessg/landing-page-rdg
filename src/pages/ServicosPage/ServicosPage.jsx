import React from "react";
import styles from "./ServicosPage.module.css";

const ServicosPage = () => {
  return (
    <div className={styles["servicos-page"]}>
      <h1 className={styles["servicos-title"]}>Nossos Serviços</h1>
      <p className={styles["servicos-description"]}>
        Conheça as soluções que a RDG Construções oferece para transformar seu
        projeto em realidade com qualidade, inovação e segurança.
      </p>
    </div>
  );
};

export default ServicosPage;
