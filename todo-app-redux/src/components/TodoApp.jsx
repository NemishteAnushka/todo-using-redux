import React from "react";
import TodosList from "./TodosList";
import AddNewTodo from "./AddNewTodo";

function TodoApp() {
  return (
    <>
      <AddNewTodo />
      <TodosList />
    </>
  );
}

export default TodoApp;
