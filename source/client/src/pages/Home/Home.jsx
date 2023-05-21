import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";

import { InjectedConnector } from "wagmi/connectors/injected";
import { Navigation } from "swiper";
import { setInfo } from "../../redux/blockChainSlice";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    dispatch(setInfo({ address, ensName, isConnected }));
  }, [isConnected, ensName, address]);
  return (
    <div className="home-root">
      Home <p>[* Note MetaMask extension is required for the following page]</p>
      <button
        disabled={isConnected}
        className="btn-light"
        onClick={() => connect()}
      >
        {!isConnected ? "Connect" : "Connected"}
      </button>
      <button
        disabled={!isConnected}
        className="btn-dark"
        onClick={() => disconnect()}
      >
        {isConnected ? "Disconnect" : "Disconnected"}
      </button>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h2>Heading 3</h2>
      <p>Paragraph</p>
    </div>
  );
};
