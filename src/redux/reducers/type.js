import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  types: [],
};

// Define the slice
const TypeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
  },
});

// export the setter funtion
export const { setTypes } = TypeSlice.actions;

// export the reducer
export default TypeSlice.reducer;
