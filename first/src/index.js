import { StrictMode } from "react";
import ReactDOM from "react-dom";
import NewTodo from "./NewTodo";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    /*
    <App />
    */
    <NewTodo />
  </StrictMode>,
  rootElement
);
