import React, { useState } from "react";
import styles from "./ContatoForm.module.css";

const ContatoForm = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    // Aqui você pode adicionar lógica para envio real
  };

  return (
    <form className={styles["contato-form"]} onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Telefone:
        <input
          type="tel"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          pattern="[0-9()\-\s]+"
          placeholder="(99) 99999-9999"
        />
      </label>
      <label>
        Assunto:
        <input
          type="text"
          name="assunto"
          value={form.assunto}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Mensagem:
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Enviar</button>
      {enviado && (
        <p className={styles["mensagem-sucesso"]}>
          Mensagem enviada com sucesso!
        </p>
      )}
    </form>
  );
};

export default ContatoForm;
