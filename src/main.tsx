import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
);
