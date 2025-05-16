import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos, toggleCompleted } from "../features/todos/todoSlice";

function TodosList() {
  const todoData = useSelector((state) => {
    return state.todos;
  });
  console.log(todoData, "todoData");

  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {todoData?.map((items) => (
          <>
            <li>{items.id}</li>
            <li>{items.task}</li>
            <li>{items.completed === true ? "completed" : "not completed"}</li>
            <button
              onClick={() => {
                dispatch(removeTodos({ id: items?.id }));
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                dispatch(toggleCompleted({ id: items?.id }));
              }}
            >
              Toggle completed
            </button>
          </>
        ))}
      </ul>
    </>
  );
}

export default TodosList;
