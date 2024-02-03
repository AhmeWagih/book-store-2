import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const findedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findedProduct) {
        findedProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removeFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear(state, action) {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
