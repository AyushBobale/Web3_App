import "./Sidebar.css";

import { toggleSidebar, toggleTheme } from "../../redux/siteSettingSlice";
import { useAccount, useBalance, useConnect, useEnsName } from "wagmi";
import { useDispatch, useSelector } from "react-redux";

import { InjectedConnector } from "wagmi/connectors/injected";
import { NavLink } from "react-router-dom";
import React from "react";
import closing from "../../assets/images/closingIcon.svg";
import home from "../../assets/images/home.svg";
import language from "../../assets/images/Language.svg";
import profile from "../../assets/images/profile.svg";
import section1 from "../../assets/images/section1.svg";
import section2 from "../../assets/images/section2.svg";
import section8 from "../../assets/images/section8.svg";
import section8Active from "../../assets/images/section8Active.svg";
import theme from "../../assets/images/theme.svg";

export const Sidebar = () => {
  const dispath = useDispatch();

  const sideBar = useSelector(
    (state) => state.rootReducer.settings.state.sideBar
  );
  const toggle = () => {
    dispath(toggleSidebar());
  };
  const toggleThm = () => {
    dispath(toggleTheme());
  };
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data, isError, isLoading } = useBalance({
    address: address,
  });
  console.log(data, isError, isLoading);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div className={sideBar ? "sidebar open" : "sidebar"}>
      <div className={sideBar ? "nav-cont open" : "nav-cont"}>
        <div className="top">
          <div className={sideBar ? "sidebar-profile open" : "sidebar-profile"}>
            <div className="profile-cont" onClick={connect}>
              {/* <img src={profile} alt="profile" /> */}
              <div className="circle-bg">
                {isConnected ? `${address.toString()?.slice(-10, -9)}` : ``}
              </div>
              <h1>
                {isConnected ? `${address.toString()?.slice(-10)}` : `Login`}
              </h1>
            </div>
            <img src={closing} alt="close" onClick={toggle} />
          </div>
          <NavLink to="/home">
            <img src={home} alt="home" />
            <p>Home</p>
          </NavLink>
          <NavLink to="/section/1">
            <img src={section1} alt="home" />
            <p>Section 1</p>
          </NavLink>
          <NavLink to="/section/2">
            <img src={section2} alt="home" />
            <p>Section 2</p>
          </NavLink>
          <NavLink to="/section/8">
            <img src={section8} alt="home" />
            <p>Section 8</p>
          </NavLink>
        </div>

        <div className="bottom">
          <div className={sideBar ? "sidebar-profile open" : "sidebar-profile"}>
            <button className="btn-grey">
              <div className="circle-bg-bottom">
                {isConnected ? `${data?.formatted}` : ``}
              </div>
              {sideBar &&
                (isConnected
                  ? `${data?.formatted} ${data?.symbol}`
                  : "Please log in")}
            </button>
            <button className="btn-light">{sideBar ? "Buy $XYZ" : "$"}</button>
          </div>
          <div className={sideBar ? "sidebar-bottom open" : "sidebar-bottom"}>
            <img src={language} alt="" />
            <button className="btn-grey" onClick={toggleThm}>
              <img src={theme} alt="" />
              <div className="theme-circle"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
