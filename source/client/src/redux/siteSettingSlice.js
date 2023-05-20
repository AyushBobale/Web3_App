import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  body: {
    color: "#ffffff",
    backgorund: "#000000",
    colorPrimary: "#3772FF",
  },
  state: {
    sideBar: true,
    activeTheme: "dark",
    theme: {
      light: "#fff",
      dark: "#3772FF",
    },
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state, { payload }) => {
      state.state.sideBar = !state.state.sideBar;
    },
    toggleTheme: (state, { payload }) => {
      if (state.state.activeTheme == "light") {
        state.state.activeTheme = "dark";
      } else {
        state.state.activeTheme = "light";
      }
    },
  },
});

export const { toggleSidebar, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
