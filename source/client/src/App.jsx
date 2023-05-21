import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { bsc, bscTestnet, localhost } from "wagmi/chains";

import { Chain } from "wagmi";
import { Home } from "./pages/Home/Home";
import { Layout } from "./components/layouts/Layout";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import React from "react";
import { Section8 } from "./pages/Section8/Section8";
import { SectionLayout } from "./components/layouts/SectionLayout";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, bsc, bscTestnet, localhost],
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
    --active-theme-indicator : ${
      theme.state.themes?.[theme.state.activeTheme]?.indicator
    };
    --primary-bg: ${theme.state.themes?.[theme.state.activeTheme]?.primaryBg};
    --primary-color: ${
      theme.state.themes?.[theme.state.activeTheme]?.primaryColor
    };
    --primary-grey: ${
      theme.state.themes?.[theme.state.activeTheme]?.primaryGrey
    };
    --dark-grey: ${theme.state.themes?.[theme.state.activeTheme]?.darkGrey};
    --todo-card-bg: ${
      theme.state.themes?.[theme.state.activeTheme]?.todoCardBg
    };
    --list-bg: ${theme.state.themes?.[theme.state.activeTheme]?.listBg};
    --primary-btn: #3772ff;
    --header-height: 2rem;
    --sidebar-width: 300px;
    --sidebar-close-width: 70px;
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
