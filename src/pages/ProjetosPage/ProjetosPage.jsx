import React from "react";
import styles from "./ProjetosPage.module.css";

const projetos = [
  {
    titulo: "Câmara Municipal de Florianópolis",
    descricao:
      "Reforma do prédio da Câmara Municipal de Florianópolis, com a revitalização da fachada e do salão de sessões.",
    imagem: "./src/assets/images/projetos/camara-fpolis.jpeg",
  },
  {
    titulo: "Clube 12 de Agosto (Centro)",
    descricao:
      "Reforma do prédio do Club 12 de Agosto, com a revitalização da fachada e do salão de festas.",
    imagem: "./src/assets/images/projetos/clube-12.jpg",
  },
  {
    titulo: "EBM Darcy Ribeiro",
    descricao: "Colocação de grades de proteção, gramado e paisagismo.",
    imagem: "./src/assets/images/projetos/ebm-darcy-ribeiro-2.jpeg",
  },
  {
    titulo: "Quadra Poliesportiva EBM Almirante Carvalhal",
    descricao:
      "Reforma realizada no EBM Almirante Carvalhal, com a revitalização da quadra poliesportiva.",
    imagem: "./src/assets/images/projetos/quadra-esportiva.jpeg",
  },
  {
    titulo: "Unidade Básica de Saúde do Bela Vista",
    descricao:
      "Demolição e reconstrução da Unidade Básica de Saúde do Bela Vista, com a construção de um novo prédio e a revitalização da área externa.",
    imagem: "./src/assets/images/projetos/ubs-bela-vista.jpeg",
  },
  {
    titulo: "Biblioteca Barreiros Filho",
    descricao:
      "Reforma do auditório da Biblioteca Barreiros Filho, com a instalação de um novo sistema de iluminação.",
    imagem: "./src/assets/images/projetos/biblioteca-barreiros.jpeg",
  },
  {
    titulo: "Praça de Coqueiros",
    descricao: "Reforma dos bancos da praça de Coqueiros.",
    imagem: "./src/assets/images/projetos/bancos-coqueiros.jpeg",
  },
  {
    titulo: "Praia da Saudade - Coqueiros",
    descricao:
      "Troca do guarda-corpo em toda a extensão da praia da Saudade em Coqueiros.",
    imagem: "./src/assets/images/projetos/praia-saudade.jpeg",
  },
  {
    titulo: "EB Antônio Paschoal Apóstolo",
    descricao:
      "Reconstrução e reforma do muro de proteção do EB Antônio Paschoal Apóstolo, com a colocação de grades de proteção.",
    imagem: "./src/assets/images/projetos/eb-antonio-paschoal.jpeg",
  },
];

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
        {projetos.map((projeto, idx) => (
          <li key={idx} className={styles["projeto-item"]}>
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className={styles["projeto-img"]}
              width={120}
              height={90}
            />
            <div className={styles["projeto-info"]}>
              <span className={styles["projeto-titulo"]}>{projeto.titulo}</span>
              <span className={styles["projeto-descricao"]}>
                {projeto.descricao}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjetosPage;
