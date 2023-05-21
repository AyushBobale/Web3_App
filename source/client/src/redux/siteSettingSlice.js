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
    themes: {
      dark: {
        indicator: "#3772FF",
        primaryBg: "#000000",
        primaryColor: "#ffffff",
        primaryGrey: "#6e6e6e",
        darkGrey: "#242731",
        todoCardBg: "#191b20",
        listBg: "#242731",
      },
      light: {
        indicator: "#fff",
        primaryBg: "#ffffff",
        primaryColor: "#000000",
        primaryGrey: "#242731",
        darkGrey: "#6e6e6e",
        todoCardBg: "#a3e3ff",
        listBg: "#3772ff",
      },
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
