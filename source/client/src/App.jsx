import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { Home } from "./pages/Home/Home";
import { Layout } from "./components/layouts/Layout";
import React from "react";

export const App = () => {
  const theme = useSelector((state) => state.rootReducer.settings);
  const themeObj = {};
  const GlobalStyle = createGlobalStyle`
  `;
  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
