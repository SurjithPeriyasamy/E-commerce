import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    category: {},
  },
  reducers: {
    addProducts: (state, action) => {
      state.category = { ...state.category, ...action.payload };
    },
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { addProducts, addAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
