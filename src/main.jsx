import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Module from "./Concepts/Module.jsx";
import Container from "./Concepts/Child_as_Prop/Container.jsx";
// import { Container } from "react-bootstrap";
import One_part from "./Concepts/Child_as_Prop/One_part.jsx";
import Sec_part from "./Concepts/Child_as_Prop/Sec_part.jsx";
import EventHandling from "./Concepts/EventHandling.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Project/Calculator/Home.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
