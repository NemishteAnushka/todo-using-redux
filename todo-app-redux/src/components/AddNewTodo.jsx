import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../features/todos/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddNewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = {
      id: nanoid(),
      task: newTodo,
      completed: false,
    };
    dispatch(addTodos(newTodoData));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addtodo"
          placeholder="addTodo"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button>add</button>
      </form>
    </>
  );
}

export default AddNewTodo;
