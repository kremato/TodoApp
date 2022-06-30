import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    replaceTodos(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
