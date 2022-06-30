import { configureStore } from "@reduxjs/toolkit";

import catalogueSlice from "./catalogue-slice";
import todosSlice from "./todos-slice";

const store = configureStore({
  reducer: { catalogue: catalogueSlice.reducer, todos: todosSlice.reducer },
});

export default store;
