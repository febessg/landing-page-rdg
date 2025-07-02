import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renderiza o nome da empresa e o ano", () => {
    render(<Footer />);
    expect(screen.getByText(/rdg construções ltda/i)).toBeInTheDocument();
    expect(screen.getByText(/since 2016/i)).toBeInTheDocument();
  });
});
