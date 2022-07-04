import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = action.payload;
      const lookForCart = state.find((crt) => crt.id === cart.id);
      if (lookForCart) return state;
      state.push(cart);
    },
    removeFromCart: (state, action) => {
      return state.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
