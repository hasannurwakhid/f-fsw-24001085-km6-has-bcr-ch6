import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  manufactures: [],
};

// Define the slice
const manufactureSlice = createSlice({
  name: "manufacture",
  initialState,
  reducers: {
    setManufactures: (state, action) => {
      state.manufactures = action.payload;
    },
  },
});

// export the setter funtion
export const { setManufactures } = manufactureSlice.actions;

// export the reducer
export default manufactureSlice.reducer;
