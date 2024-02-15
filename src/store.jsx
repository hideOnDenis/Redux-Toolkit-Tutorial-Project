import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.jsx";
import modalReducer from "./features/modal/modalSlice.jsx";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
