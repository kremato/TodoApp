import { configureStore } from "@reduxjs/toolkit";

import catalogueSlice from "./catalogue-slice";
import filterSlice from "./filter-slice";
import searchSlice from "./search-slice";
import todosSlice from "./todos-slice";

const store = configureStore({
  reducer: {
    catalogue: catalogueSlice.reducer,
    todos: todosSlice.reducer,
    filter: filterSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
