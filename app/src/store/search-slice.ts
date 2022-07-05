import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    replaceSearchString(state, action) {
      state.search = action.payload.search;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
