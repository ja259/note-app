import { render } from "@testing-library/react";
import App from "../App";
import React from "react";
import sample from "../sample";

test("renders App", () => {
  render(<App sample={sample} />);
});