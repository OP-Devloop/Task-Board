import TaskCard from "../components/TaskCard";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("TaskCard component", () => {
  it("renders the correct title", () => {
    render(
      <TaskCard
        id={1}
        title="Test Task"
        description="This is a test task."
        category="Test Category"
        assignee="Test Assignee"
        priority="medium"
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Test Task" }),
    ).toBeInTheDocument();
  });

  it("renders the correct description", () => {
    render(
      <TaskCard
        id={1}
        title="Test Task"
        description="This is a test task."
        category="Test Category"
        assignee="Test Assignee"
        priority="medium"
      />,
    );
    expect(screen.getByText("This is a test task.")).toBeInTheDocument();
  });

  it("renders the correct category", () => {
    render(
      <TaskCard
        id={1}
        title="Test Task"
        description="This is a test task."
        category="Test Category"
        assignee="Test Assignee"
        priority="medium"
      />,
    );
    expect(screen.getByText("Test Category")).toBeInTheDocument();
  });

  it("renders the correct assignee", () => {
    render(
      <TaskCard
        id={1}
        title="Test Task"
        description="This is a test task."
        category="Test Category"
        assignee="Test Assignee"
        priority="medium"
      />,
    );
    expect(screen.getByText("Test Assignee")).toBeInTheDocument();
  });

  it("renders the correct priority", () => {
    render(
      <TaskCard
        id={1}
        title="Test Task"
        description="This is a test task."
        category="Test Category"
        assignee="Test Assignee"
        priority="medium"
      />,
    );
    expect(screen.getByText("medium")).toBeInTheDocument();
  });
});
