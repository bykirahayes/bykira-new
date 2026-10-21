import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("ByKira could not find the application root element.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
