import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";

import React, { useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";

import { ImageOnHover } from "../../components/ImageOnHover/ImageOnHover";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Link } from "react-router-dom";
import deployed from "../../assets/images/deployed.PNG";
import ganache from "../../assets/images/ganache.PNG";
import localStore from "../../assets/images/local_store.PNG";
import local_contract from "../../assets/images/contracts_local.PNG";
import metaM from "../../assets/images/meta_m_conn.png";
import { setInfo } from "../../redux/blockChainSlice";
import themeSupp from "../../assets/images/theme.PNG";
import transHist from "../../assets/images/trans_hist.png";
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
    <div className="home-split">
      <div className="home-root">
        <h1>Home</h1>{" "}
        <p> -[* Note MetaMask extension is required for the following page]</p>
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
        <p> -Other pages are implemented just to demonstrate nested routing</p>
        <br />
        <h3>Key Notes</h3>
        <p>
          {" "}
          - Since I compiled the sol files and deployed them seperately there
          might be some differences
        </p>
        <p> -Contract address will also differ</p>
        <p>
          {" "}
          - At the time of deployment I will switch the AIB and address so that
          it works with original chain
        </p>
        <h3>What is completed ? [ Hover over text to see images ]</h3>
        <ImageOnHover
          text={<p> -Connecting Meta mask account</p>}
          image={metaM}
        />
        <ImageOnHover
          text={<p> -Complete contracts working on local ganache blockchain</p>}
          image={local_contract}
        />
        <ImageOnHover text={<p> -Example transactions</p>} image={transHist} />
        <ImageOnHover
          text={
            <p>
              {" "}
              - Local storage based functionalty [in case the Smart contract
              based fails]
            </p>
          }
          image={localStore}
          height={"300px"}
        />
        <p> -UI with some added features</p>
        <ImageOnHover text={<p> -Support for themes</p>} image={themeSupp} />
        <ImageOnHover
          text={<p> -Deployed smart contract on Ganache</p>}
          image={ganache}
        />
        <ImageOnHover
          text={<p> -Contracts Executed outside</p>}
          image={deployed}
        />
        <br />
        <h3>What is to be done ?</h3>
        <p>
          {" "}
          - Testing on BSC scans test net as I did not have access to TBNB I
          just tested it locally on ganache
        </p>
        <p>
          {" "}
          - Hence I have no idea if this works on the deployed page
          [https/https] communication won't happen
        </p>
        <br />
        <h3>Main issues faced</h3>
        <p> -Getting a legit faucet website for tBNB</p>
        <br />
      </div>
      <div className="home-right">
        <h1>Working example on localy hosted blockchain</h1>
        <iframe
          src="https://drive.google.com/file/d/1MMHhygIeCybjU48dsbhAo9ZzjiFYzfjN/preview"
          width="640"
          height="360"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};
