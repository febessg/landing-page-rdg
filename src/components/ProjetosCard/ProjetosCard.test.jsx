import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjetosCard from "./ProjetosCard";

describe("ProjetosCard", () => {
  it("renderiza imagem, título e descrição", () => {
    render(
      <ProjetosCard
        imagem="img-teste.jpg"
        titulo="Projeto Teste"
        descricao="Descrição teste"
      />
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", "img-teste.jpg");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Projeto Teste");
    expect(screen.getByText("Projeto Teste")).toBeInTheDocument();
    expect(screen.getByText("Descrição teste")).toBeInTheDocument();
  });
});
