import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ServicosPage from "./ServicosPage";

describe("ServicosPage", () => {
  it("renderiza título, subtítulo e um serviço", () => {
    render(<ServicosPage />);
    expect(screen.getByText(/nossos serviços/i)).toBeInTheDocument();
    expect(
      screen.getByText(/soluções completas para suas necessidades/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/construção de edifícios/i)).toBeInTheDocument();
  });
});
