import React from "react";
import styles from "./InfoPage.module.css";

const InfoPage = () => {
  return (
    <div className={styles["info-page"]}>
      <div className={styles["info-description"]}>
        <h1 className={styles["info-title"]}>
          Quem somos: A Base da Nossa Paixão por Construir
        </h1>
        <p>
          A RDG Construções LTDA, fundada em 1º de dezembro de 2016, nasceu com
          o propósito de construir não apenas edifícios, mas também relações
          duradouras, baseadas na confiança e na excelência. Com sede em
          Florianópolis, Santa Catarina, consolidamo-nos como uma empresa que
          preza pela entrega de resultados superiores, com foco na{" "}
          <strong>inovação</strong>, <strong>sustentabilidade</strong> e, acima
          de tudo, na <strong>satisfação do cliente</strong>. Somos apaixonados
          por transformar desafios em soluções concretas, sempre com máxima
          qualidade e segurança.
        </p>
      </div>
      <div className={styles["info-section"]}>
        <h2>Nossa Missão</h2>
        <p>
          Entregar soluções de engenharia e construção civil que superem as
          expectativas de nossos clientes, por meio da inovação, eficiência e
          comprometimento com a qualidade e a segurança.
        </p>
      </div>
      <div className={styles["info-section"]}>
        <h2>Nossa Visão</h2>
        <p>
          Ser reconhecida como uma construtora líder em excelência, confiança e
          inovação no mercado de Santa Catarina, referência em empreendimentos
          que impactam positivamente a vida das pessoas e o desenvolvimento
          urbano.
        </p>
      </div>
      <div className={styles["info-section"]}>
        <h2>Nossos Valores</h2>
        <ul>
          <li>
            <strong>Excelência:</strong> Busca contínua pela perfeição em cada
            detalhe.
          </li>
          <li>
            <strong>Integridade:</strong> Atuação transparente, ética e
            responsável.
          </li>
          <li>
            <strong>Inovação:</strong> Investimento em novas tecnologias e
            métodos construtivos.
          </li>
          <li>
            <strong>Comprometimento:</strong> Dedicação total para cumprir
            prazos e resultados.
          </li>
          <li>
            <strong>Segurança:</strong> Prioridade máxima na proteção de todos
            os envolvidos nos projetos.
          </li>
          <li>
            <strong>Sustentabilidade:</strong> Construindo um futuro melhor para
            as próximas gerações.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPage;
