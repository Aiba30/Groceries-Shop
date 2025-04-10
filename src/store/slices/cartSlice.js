import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartElems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart(state, { payload }) {
      const existing = state.cartElems.find((prod) => prod.id === payload.id);
      if (!existing) {
        state.cartElems.push(payload);
      } else existing.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state.cartElems));
    },
    removeFromCart(state, { payload }) {
      const existing = state.cartElems.find((prod) => prod.id === payload);
      if (!existing) return;
      if (existing.quantity === 1) {
        state.cartElems = state.cartElems.filter((prod) => prod.id !== payload);
      } else existing.quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(state.cartElems));
    },
    deleteCartItem(state, { payload }) {
      state.cartElems = state.cartElems.filter((prod) => prod.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.cartElems));
    },
    clearCart(state) {
      state.cartElems = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, deleteCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
