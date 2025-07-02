import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContatoPage from "./ContatoPage";

describe("ContatoPage", () => {
  it("renderiza título, subtítulo e formulário de contato", () => {
    render(<ContatoPage />);
    expect(
      screen.getByRole("heading", { name: /fale conosco:/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/vamos concretizar seu próximo projeto!/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/nome:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem:/i)).toBeInTheDocument();
  });
});
