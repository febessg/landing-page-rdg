import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renderiza o logo e os links principais", () => {
    render(<Navbar />);
    expect(screen.getByAltText(/logo rdg construções/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /sobre nós/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contato/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /serviços/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projetos/i })).toBeInTheDocument();
  });

  it("abre e fecha o menu ao clicar no botão", () => {
    render(<Navbar />);
    const btnMenu = screen.getByLabelText(/abrir\/fechar menu/i);
    const links = screen.getByRole("list");
    // O menu começa fechado (não tem classe open)
    expect(links.className).not.toMatch(/open/);
    fireEvent.click(btnMenu);
    // Após clicar, o menu deve abrir (classe open presente)
    expect(links.className).toMatch(/open/);
    fireEvent.click(btnMenu);
    // Após clicar novamente, o menu deve fechar
    expect(links.className).not.toMatch(/open/);
  });
});
