import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ContatoForm from "./ContatoForm";

// Teste básico de renderização e preenchimento de campos

describe("ContatoForm", () => {
  it("renderiza todos os campos do formulário", () => {
    render(<ContatoForm />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Assunto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("permite preencher os campos do formulário", () => {
    render(<ContatoForm />);
    const nomeInput = screen.getByLabelText(/Nome/i);
    const emailInput = screen.getByLabelText(/E-mail/i);
    const mensagemInput = screen.getByLabelText(/Mensagem/i);

    fireEvent.change(nomeInput, { target: { value: "João" } });
    fireEvent.change(emailInput, { target: { value: "joao@email.com" } });
    fireEvent.change(mensagemInput, { target: { value: "Olá, tudo bem?" } });

    expect(nomeInput.value).toBe("João");
    expect(emailInput.value).toBe("joao@email.com");
    expect(mensagemInput.value).toBe("Olá, tudo bem?");
  });
});
