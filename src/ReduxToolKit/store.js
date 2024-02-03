import { configureStore } from "@reduxjs/toolkit";
import productClice from "./Clices/product-clice";
import cartClice from "./Clices/cart-clice";
export const store = configureStore({
  reducer: {
    products: productClice,
    carts: cartClice,
  },
});
