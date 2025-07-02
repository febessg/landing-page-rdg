import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjetosPage from "./ProjetosPage";

describe("ProjetosPage", () => {
  it("renderiza título, subtítulo e um projeto", () => {
    render(<ProjetosPage />);
    expect(screen.getByText(/nossos projetos/i)).toBeInTheDocument();
    expect(
      screen.getByText(/conquistas que nos orgulham/i)
    ).toBeInTheDocument();
    const titulos = screen.getAllByText(/câmara municipal de florianópolis/i);
    expect(titulos.length).toBeGreaterThan(0);
  });

  it("renderiza todos os projetos da lista", () => {
    render(<ProjetosPage />);
    // Deve haver 9 títulos de projetos
    const titulos = [
      /câmara municipal de florianópolis/i,
      /clube 12 de agosto/i,
      /ebm darcy ribeiro/i,
      /quadra poliesportiva ebm almirante carvalhal/i,
      /unidade básica de saúde do bela vista/i,
      /biblioteca barreiros filho/i,
      /praça de coqueiros/i,
      /praia da saudade/i,
      /eb antônio paschoal apóstolo/i,
    ];
    titulos.forEach((titulo) => {
      expect(screen.getAllByText(titulo).length).toBeGreaterThan(0);
    });
  });

  it("renderiza imagens dos projetos", () => {
    render(<ProjetosPage />);
    // Deve haver 9 imagens
    const imagens = screen.getAllByRole("img");
    expect(imagens.length).toBeGreaterThanOrEqual(9);
  });

  it("renderiza descrições dos projetos", () => {
    render(<ProjetosPage />);
    expect(
      screen.getAllByText(
        /reforma do prédio da câmara municipal de florianópolis/i
      ).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        /colocação de grades de proteção, gramado e paisagismo/i
      ).length
    ).toBeGreaterThan(0);
  });
});
