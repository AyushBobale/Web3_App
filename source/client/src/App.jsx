import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";

import { Home } from "./pages/Home/Home";
import { Layout } from "./components/layouts/Layout";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import React from "react";
import { Section8 } from "./pages/Section8/Section8";
import { SectionLayout } from "./components/layouts/SectionLayout";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export const App = () => {
  const theme = useSelector((state) => state.rootReducer.settings);
  const themeObj = {};
  const GlobalStyle = createGlobalStyle`
  :root{
    --active-theme-indicator : ${theme.state.theme[theme.state.activeTheme]}
  }
  `;
  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      <WagmiConfig config={config}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/section" element={<SectionLayout />}>
              <Route path="/section/8" element={<Section8 />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </WagmiConfig>
    </ThemeProvider>
  );
};
