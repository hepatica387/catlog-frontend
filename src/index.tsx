import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/common.css";
import "./styles/layout.css";
import "./styles/main.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("React root element를 찾을 수 없습니다.");
}

createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
