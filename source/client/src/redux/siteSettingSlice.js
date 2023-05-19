import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  body: {
    color: "#ffffff",
    backgorund: "#000000",
    colorPrimary: "#3772FF",
  },
  state: {
    sideBar: true,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state, { payload }) => {
      state.state.sideBar = !state.state.sideBar;
    },
  },
});

export const { toggleSidebar } = settingsSlice.actions;
export default settingsSlice.reducer;
