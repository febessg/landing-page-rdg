import React from "react";
import styles from "./ContatoPage.module.css";
import ContatoForm from "../../components/ContatoForm/ContatoForm";

const ContatoPage = () => {
  return (
    <div className={styles["contato-page"]}>
      <h1 className={styles["contato-title"]}>Fale Conosco:</h1>
      <span className={styles["contato-subtitle"]}>
        Vamos Concretizar Seu Próximo Projeto!
      </span>
      <p className={styles["contato-description"]}>
        Sua visão está a um passo de se tornar realidade. Entre em contato com a
        equipe da RDG Construções e descubra como podemos transformar seus
        planos em um projeto de sucesso. Estamos prontos para ouvir suas ideias,
        tirar suas dúvidas e apresentar as melhores soluções para suas
        necessidades.
      </p>
      <div className={styles["contato-info"]}>
        <p>
          Preencha o formulário abaixo ou utilize nossos canais de contato
          direto:
        </p>
        <p>
          <strong>Telefone:</strong> (48) 9 9999-9999
          <br />
          <strong>E-mail:</strong> contato@rdgconstrucoes.com.br
        </p>
        <p>
          <strong>Endereço:</strong>
          <br />
          R JOSÉ PEDRO GIL, 136, CASA
          <br />
          Bairro Agronômica
          <br />
          Florianópolis - SC, CEP: 88025-030
        </p>
      </div>
      <ContatoForm />
    </div>
  );
};

export default ContatoPage;
