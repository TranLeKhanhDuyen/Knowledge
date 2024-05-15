import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Duyen" />);

    const heading = screen.getByRole("heading");
    console.log(heading.textContent); 

    expect(heading).toBeInTheDocument(); //Check if a heading exists in the DOM
    expect(heading).toHaveTextContent(/hello/i); //Check if the heading contains the text "Hello".
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
