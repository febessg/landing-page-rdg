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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const destinatario = "contato@rdgconstrucoes.com.br";
    const assunto = encodeURIComponent(form.assunto || "Contato pelo site");
    const corpo = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\n${form.mensagem}`
    );
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
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
    </form>
  );
};

export default ContatoForm;
