// storeSlice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoItems = localStorage.getItem("todo") !== null ? JSON.parse(localStorage.getItem("todo")) : [];

const initialState = {
  todos: todoItems
};

export const storeSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, updateTodo } = storeSlice.actions;
export default storeSlice.reducer;
