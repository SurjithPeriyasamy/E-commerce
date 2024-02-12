import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    category: {},
  },
  reducers: {
    addProducts: (state, action) => {
      state.category = { ...state.category, ...action.payload };
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
