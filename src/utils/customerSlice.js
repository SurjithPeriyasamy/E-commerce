import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customerInfo: {},
    shippingInfo: {},
  },
  reducers: {
    addCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
    addShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
  },
});

export const { addCustomerInfo, addShippingInfo } = customerSlice.actions;
export default customerSlice.reducer;
