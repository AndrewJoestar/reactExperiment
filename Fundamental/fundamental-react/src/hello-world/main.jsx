import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Table from "./table/Table";
import { StrictMode } from "react";
import TodoList from "../todo-list/Todolist";
import AllertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import ToolBar from "../button/ToolBar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table></Table>
      <AllertButton text="Click Me" message="Hello, World!" />
      <MyButton text="Smash" onSmash={() => alert("Button smashed!")} />
      <ToolBar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar button clicked, thankyou!");
        }}
      />
      <SearchForm />
      <SayHelloForm />

      <Counter />
    </Container>
  </StrictMode>
);
