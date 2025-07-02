import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WsappButton from "./WsappButton";

describe("WsappButton", () => {
  it("renderiza o botão com link e texto", () => {
    render(<WsappButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", expect.stringContaining("wa.me"));
    expect(screen.getByText(/converse com a gente/i)).toBeInTheDocument();
  });
});
