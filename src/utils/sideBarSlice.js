import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    openSideBar: (state) => {
      state.isMenuOpen = true;
    },
    closeSideBar: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
