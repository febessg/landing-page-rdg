import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroPage from "./HeroPage";

describe("HeroPage", () => {
  it("renderiza o título principal, botão do WhatsApp e carrossel", () => {
    render(<HeroPage />);
    expect(
      screen.getByText(/construção civil com qualidade/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /solicite um orçamento/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /obra 1/i })).toBeInTheDocument();
  });
});
