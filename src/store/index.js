import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import cartReducer from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";
import { vacanciesApi } from "./api/vacaciesApi";
const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
    cartSlice: cartReducer,
    favoritesSlice: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      vacanciesApi.middleware
    ),
});

export default store;
