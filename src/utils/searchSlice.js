import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    allSearchProducts: [],
    searchCache: {},
    isSearchActive: false,
  },
  reducers: {
    addAllProducts: (state, { payload }) => {
      state.allSearchProducts = payload;
    },
    addSearchCache: (state, action) => {
      state.searchCache = { ...state.searchCache, ...action.payload };
    },
    openSearch: (state) => {
      state.isSearchActive = true;
    },
    closeSearch: (state) => {
      state.isSearchActive = false;
    },
  },
});

export const { addSearchCache, openSearch, closeSearch, addAllProducts } =
  searchSlice.actions;
export default searchSlice.reducer;
