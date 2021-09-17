import React from "react";
import Todoheader from "./components/Todoheader.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList";
function NewTodo() {
  return (
    <>
      <Todoheader />
      <TodoList />
      <TodoForm />
    </>
  );
}
export default NewTodo;
