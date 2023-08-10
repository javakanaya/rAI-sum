import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// global state that save the entire information
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});
