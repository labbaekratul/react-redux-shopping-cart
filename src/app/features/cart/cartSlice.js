import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const cart = {
        cart: action.payload,
      };
      state.push(cart);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
