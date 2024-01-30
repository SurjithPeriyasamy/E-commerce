import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchCache: {},
    isSearchActive: false,
  },
  reducers: {
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

export const { addSearchCache, openSearch, closeSearch } = searchSlice.actions;
export default searchSlice.reducer;
