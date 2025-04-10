import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  },
  reducers: {
    addToFavorites(state, { payload }) {
      const existing = state.favorites.find((item) => item?.id === payload.id);
      if (!existing) {
        state.favorites.push(payload);
      } else return;
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((item) => item?.id !== payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
