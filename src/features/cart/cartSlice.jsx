import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../assets/cartItems.js";
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
