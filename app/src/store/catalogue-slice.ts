import { createSlice } from "@reduxjs/toolkit";

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    items: [],
  },
  reducers: {
    replaceCatalogue(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const catalogueActions = catalogueSlice.actions;

export default catalogueSlice;
