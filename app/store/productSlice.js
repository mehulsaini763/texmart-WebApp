import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const productSlice = createSlice({
  name: "productData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default productSlice.reducer;

export const getProducts = createAsyncThunk("products", async () => {
  const products = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });
  return products;
});
