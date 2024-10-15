import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const asideOrder = createSlice({
  name: "isOpenAsideOrder",
  initialState,
  reducers: {
    toggleAsideOrder: (state: boolean) => {
      if (state) return false;
      return true;
    },
  },
});

export const { toggleAsideOrder } = asideOrder.actions;
export default asideOrder.reducer;
