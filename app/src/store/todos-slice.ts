import { createSlice } from "@reduxjs/toolkit";
import { object } from "yup";
import { ITodoItem } from "../types/types";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    replaceTodos(state, action) {
      state.items = action.payload.items;
    },
    removeTodo(state, action) {
      state.items = state.items.filter((object: ITodoItem) => {
        return object.id !== action.payload.todoId;
      });
    },
    updateTodo(state, action) {
      state.items = state.items.map((object: ITodoItem) => {
        if (object.id === action.payload.todoId) {
          object.completed = !object.completed;
        }
        return object;
      }) as never[];
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
