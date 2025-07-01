import React from "react";
import styles from "./ProjetosPage.module.css";

const ProjetosPage = () => {
  return (
    <div className={styles["projetos-page"]}>
      <h1 className={styles["projetos-title"]}>Nossos Projetos:</h1>
      <span className={styles["projetos-subtitle"]}>
        Conquistas que Nos Orgulham
      </span>
      <p className={styles["projetos-description"]}>
        Acreditamos que a melhor forma de demonstrar nossa capacidade é através
        do trabalho que realizamos. Nossa paixão pela construção se reflete em
        cada empreendimento entregue, unindo estética, funcionalidade e
        durabilidade. Convidamos você a explorar alguns dos projetos que
        moldaram nossa história e impactaram a vida de nossos clientes.
      </p>
      <ul className={styles["projetos-list"]}>
        <li>
          <strong>Câmara Municipal de Florianópolis</strong> — Reforma do prédio
          da Câmara Municipal de Florianópolis, com a revitalização da fachada e
          do salão de sessões.
        </li>
        <li>
          <strong>Clube 12 de Agosto (Centro)</strong> — Reforma do prédio do
          Club 12 de Agosto, com a revitalização da fachada e do salão de
          festas.
        </li>
        <li>
          <strong>EBM Darcy Ribeiro</strong> — Colocação de grades de proteção,
          gramado e paisagismo.
        </li>
        <li>
          <strong>Reforma da quadra esportiva EBM Almirante Carvalhal</strong> —
          Reforma realizada no EBM Almirante Carvalhal, com a revitalização da
          quadra poliesportiva.
        </li>
        <li>
          <strong>Centro de Saúde Potecas</strong> — Demolição e reconstrução do
          centro de saúde Potecas, com a construção de um novo prédio e a
          revitalização da área externa.
        </li>
      </ul>
    </div>
  );
};

export default ProjetosPage;
