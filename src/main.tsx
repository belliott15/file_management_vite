import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.js";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
);
