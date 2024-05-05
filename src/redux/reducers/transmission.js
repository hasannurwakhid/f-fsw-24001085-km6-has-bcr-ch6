import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  transmissions: [],
};

// Define the slice
const TransmissionSlice = createSlice({
  name: "transmission",
  initialState,
  reducers: {
    setTransmissions: (state, action) => {
      state.transmissions = action.payload;
    },
  },
});

// export the setter funtion
export const { setTransmissions } = TransmissionSlice.actions;

// export the reducer
export default TransmissionSlice.reducer;
