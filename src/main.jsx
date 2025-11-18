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
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Module /> */}
    {/* <>
      <Container>
        <One_part />
      </Container>
      <Container>
        <Sec_part />
      </Container>
    </> */}
    <Container>
      <EventHandling />
    </Container>
  </StrictMode>
);
