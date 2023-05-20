import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    isConnected: false,
    address: null,
    ensName: null,
  },
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setInfo: (state, { payload }) => {
      state.info = payload;
    },
  },
});

export const { setInfo } = accountSlice.actions;
export default accountSlice.reducer;
