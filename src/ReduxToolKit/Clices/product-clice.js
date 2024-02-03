import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productClice/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);
const productClice = createSlice({
  name: "productClice",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { } = productClice.actions;

export default productClice.reducer;
