import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import sample from "./sample";
import "./assets/stylesheets/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App sample={sample} />
  </React.StrictMode>,
  document.getElementById("root")
);