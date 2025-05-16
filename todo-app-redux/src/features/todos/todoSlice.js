import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", task: "Do homework", completed: false },
  { id: "2", task: "Edit videos", completed: false },
  { id: "3", task: "Watch Videos", completed: false },
];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, actions) => {
      state.push(actions.payload);
    },
    removeTodos: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload.id);
    },
    toggleCompleted: (state, action) => {
      for (let items of state) {
        if (items.id === action.payload.id) {
          items.completed = !items.completed;
        }
      }
    },
  },
});
export const { addTodos, removeTodos, toggleCompleted } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
