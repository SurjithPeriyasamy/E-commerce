import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUser: null,
    userPopUp: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    removeUser: (state, action) => {
      state.loggedInUser = null;
    },
    openPopUp: (state) => {
      state.userPopUp = true;
    },
    closePopUp: (state) => {
      state.userPopUp = false;
    },
    togglePopUp: (state) => {
      state.userPopUp = !state.userPopUp;
    },
  },
});

export const { addUser, removeUser, openPopUp, closePopUp, togglePopUp } =
  userSlice.actions;
export default userSlice.reducer;
