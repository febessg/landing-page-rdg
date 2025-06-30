import React from "react";
import styles from "./ServicosPage.module.css";

const ServicosPage = () => {
  return (
    <div className={styles["servicos-page"]}>
      <h1 className={styles["servicos-title"]}>Nossos Serviços:</h1>
      <span className={styles["servicos-subtitle"]}>
        Soluções Completas para Suas Necessidades
      </span>
      <p className={styles["servicos-description"]}>
        Na RDG Construções, oferecemos um leque abrangente de serviços para
        atender às mais diversas demandas do mercado da construção civil. Nossa
        equipe altamente qualificada está pronta para transformar seu projeto em
        realidade, do conceito à entrega final.
      </p>
      <ul className={styles["servicos-list"]}>
        <li>
          <strong>Construção de Edifícios (Residenciais e Comerciais):</strong>{" "}
          Da fundação ao acabamento, construímos seu imóvel com a mais alta
          qualidade e atenção aos detalhes, garantindo durabilidade e
          funcionalidade.
        </li>
        <li>
          <strong>Obras de Infraestrutura:</strong> Experiência em construção de
          rodovias, ferrovias, obras de urbanização (ruas, praças, calçadas) e
          instalações esportivas e recreativas.
        </li>
        <li>
          <strong>Terraplenagem e Preparação de Terreno:</strong> Realizamos
          todos os serviços de movimentação de terra, escavação, aterro e
          limpeza de canteiros para garantir a base sólida do seu
          empreendimento.
        </li>
        <li>
          <strong>Instalações e Acabamentos:</strong> Especialistas na
          instalação de portas, janelas, tetos, divisórias, armários embutidos e
          em todos os serviços de acabamento que conferem beleza e
          funcionalidade aos ambientes.
        </li>
        <li>
          <strong>Comércio de Materiais de Construção:</strong> Além de
          construir, também podemos fornecer os materiais de construção
          necessários para sua obra, garantindo qualidade e conveniência.
        </li>
      </ul>
    </div>
  );
};

export default ServicosPage;
