import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Table from "./table/Table";
import { StrictMode } from "react";
import TodoList from "../todo-list/Todolist";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table></Table>
    </Container>
  </StrictMode>
);
