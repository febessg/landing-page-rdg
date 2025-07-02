import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import HeroCarousel from "./HeroCarousel";

const mockImages = [
  { src: "img1.jpg", alt: "Imagem 1" },
  { src: "img2.jpg", alt: "Imagem 2" },
  { src: "img3.jpg", alt: "Imagem 3" },
  { src: "img4.jpg", alt: "Imagem 4" },
];

describe("HeroCarousel", () => {
  it("renderiza as imagens corretamente", () => {
    render(<HeroCarousel images={mockImages} />);
    // Deve renderizar pelo menos uma imagem
    const imagens = screen.getAllByRole("img");
    expect(imagens.length).toBeGreaterThan(0);
    expect(imagens[0]).toHaveAttribute("src", "img1.jpg");
    expect(imagens[0]).toHaveAttribute("alt", "Imagem 1");
  });

  it("navega para a próxima imagem ao clicar no botão", () => {
    render(<HeroCarousel images={mockImages} />);
    const btnProxima = screen.getByLabelText(/próxima imagem/i);
    fireEvent.click(btnProxima);
    // Após clicar, a primeira imagem visível deve mudar
    const imagens = screen.getAllByRole("img");
    // Como slidesPerView depende do tamanho da tela, garantimos que mudou
    expect(imagens[0].src).not.toContain("img1.jpg");
  });

  it("navega para a imagem anterior ao clicar no botão", () => {
    render(<HeroCarousel images={mockImages} />);
    const btnAnterior = screen.getByLabelText(/imagem anterior/i);
    fireEvent.click(btnAnterior);
    const imagens = screen.getAllByRole("img");
    // Como slidesPerView depende do tamanho da tela, garantimos que mudou
    expect(imagens[0].src).not.toContain("img1.jpg");
  });
});
