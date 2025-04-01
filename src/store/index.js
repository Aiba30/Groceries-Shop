import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import productsReducer from "./slices/productsSlice";
const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
