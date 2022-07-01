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
    addCatalogueItem(state, action) {
      state.items = state.items.concat(action.payload);
    },
  },
});

export const catalogueActions = catalogueSlice.actions;

export default catalogueSlice;
