import { createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from '../types/types'

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
    }
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
