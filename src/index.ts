import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App, null)
  )
);