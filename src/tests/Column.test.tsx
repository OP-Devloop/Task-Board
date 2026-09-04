import Column from "../components/Column";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

const children = <div>Task Card</div>;

describe("Column component", () => {
  it("renders the correct title", () => {
    render(<Column title="To Do">{children}</Column>);

    expect(screen.getByRole("heading", { name: "To Do" })).toBeInTheDocument();
  });

  it("renders the correct children", () => {
    render(<Column title="To Do">{children}</Column>);

    expect(screen.getByText("Task Card")).toBeInTheDocument();
  });
});
