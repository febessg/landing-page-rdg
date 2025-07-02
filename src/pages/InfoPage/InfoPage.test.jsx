import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InfoPage from "./InfoPage";

describe("InfoPage", () => {
  it("renderiza título, missão, visão e valores", () => {
    render(<InfoPage />);
    expect(screen.getByText(/quem somos/i)).toBeInTheDocument();
    expect(screen.getByText(/nossa missão/i)).toBeInTheDocument();
    expect(screen.getByText(/nossa visão/i)).toBeInTheDocument();
    expect(screen.getByText(/nossos valores/i)).toBeInTheDocument();
    const valores = screen.getAllByText(/excelência/i);
    expect(valores.length).toBeGreaterThan(0);
  });
});
