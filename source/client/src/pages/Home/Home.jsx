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
      <h1>Home</h1>{" "}
      <p>[* Note MetaMask extension is required for the following page]</p>
      <div className="connection-btn-wrap">
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
      </div>
      <h3>What is completed ?</h3>
      <p>Connecting Meta mask account</p>
      <p>Local storage based functionalty</p>
      <p>UI with some added features</p>
      <p>Support of themes</p>
      <p>Deployed smart contract on Ganache</p>
    </div>
  );
};
