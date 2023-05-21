import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";

import React, { useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";

import { ImageOnHover } from "../../components/ImageOnHover/ImageOnHover";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Link } from "react-router-dom";
import deployed from "../../assets/images/deployed.PNG";
import { ethers } from "ethers";
import ganache from "../../assets/images/ganache.PNG";
import localStore from "../../assets/images/local_store.PNG";
import metaM from "../../assets/images/meta_m_conn.png";
import { setInfo } from "../../redux/blockChainSlice";
import themeSupp from "../../assets/images/theme.PNG";
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
      <h1>
        <Link to="/section/8">You will find implented Todo in Section 8</Link>
      </h1>
      <p>Other pages are implemented just to demonstrate nested routing</p>
      <br />
      <h3>What is completed ? [ Hover over items to see more ]</h3>
      <ImageOnHover text={<p>Connecting Meta mask account</p>} image={metaM} />
      <ImageOnHover
        text={<p>Local storage based functionalty</p>}
        image={localStore}
        height={"300px"}
      />
      <p>UI with some added features</p>
      <ImageOnHover text={<p>Support for themes</p>} image={themeSupp} />
      <ImageOnHover
        text={<p>Deployed smart contract on Ganache</p>}
        image={ganache}
      />
      <ImageOnHover text={<p>Contracts Executed outside</p>} image={deployed} />
      <br />
      <h3>What is to be done ?</h3>
      <p>Wagmi to run contracts</p>
      <br />
      <h3>Main issues faced</h3>
      <p>Getting a legit faucet website for tBNB</p>
      <br />
    </div>
  );
};
