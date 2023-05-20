import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    isConnected: false,
    address: null,
    ensName: null,
  },
  updateDone: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setInfo: (state, { payload }) => {
      state.info = payload;
    },
    updateState: (state, { payload }) => {
      state.updateDone = !state.updateDone;
    },
  },
});

export const { setInfo, updateState } = accountSlice.actions;
export default accountSlice.reducer;
