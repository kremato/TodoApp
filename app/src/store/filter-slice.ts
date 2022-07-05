import { createSlice } from "@reduxjs/toolkit";
import { Visibility } from "../types/types";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    visibility: Visibility.All,
  },
  reducers: {
    changeVisibility(state, action) {
      state.visibility = action.payload.visibility;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
