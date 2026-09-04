import Header from "../components/Header";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  render(<Header />);
});

describe("Header component", () => {
  it("renders the correct title", () => {
    expect(
      screen.getByRole("heading", { name: "Task Board" }),
    ).toBeInTheDocument();
  });

  it("renders the correct description", () => {
    expect(
      screen.getByText("A simple task board built with React, TypeScript, and components."),
    ).toBeInTheDocument();
  });
});