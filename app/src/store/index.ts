import { configureStore } from '@reduxjs/toolkit';

import catalogueSlice from './catalogue-slice';

const store = configureStore({
  reducer: { catalogue: catalogueSlice.reducer },
});

export default store;
