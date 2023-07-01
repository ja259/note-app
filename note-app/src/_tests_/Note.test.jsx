import { render, screen } from "@testing-library/react";
import React from "react";
import Note from "../components/Note";

describe("Note", () => {
  beforeEach(() => {
    const note = {
      title: "im a title",
      note: "im a note",
      project: "im a project",
      date: "im a date",
    };
    render(<Note edit={true} note={note} />);
  });
  it("renders title correctly", () => {
    expect(screen.getByText("im a title")).toBeInTheDocument();
  });
  test("renders note correctly", () => {
    expect(screen.getByText("im a note")).toBeInTheDocument();
  });
  test("renders project correctly", () => {
    expect(screen.getByText("im a project")).toBeInTheDocument();
  });
  test("renders date correctly", () => {
    expect(screen.getByText("im a date")).toBeInTheDocument();
  });
});