import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import profileSlice from "./profileSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    profile: profileSlice,
  },
});
