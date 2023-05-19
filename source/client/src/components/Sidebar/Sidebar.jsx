import "./Sidebar.css";

import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import React from "react";
import closing from "../../assets/images/closingIcon.svg";
import home from "../../assets/images/home.svg";
import profile from "../../assets/images/profile.svg";
import section1 from "../../assets/images/section1.svg";
import section2 from "../../assets/images/section2.svg";
import section8 from "../../assets/images/section8.svg";
import section8Active from "../../assets/images/section8Active.svg";
import { toggleSidebar } from "../../redux/siteSettingSlice";

export const Sidebar = () => {
  const dispath = useDispatch();

  const sideBar = useSelector(
    (state) => state.rootReducer.settings.state.sideBar
  );
  const toggle = () => {
    dispath(toggleSidebar());
  };
  return (
    <div className={sideBar ? "sidebar open" : "sidebar"}>
      <div className={sideBar ? "sidebar-profile open" : "sidebar-profile"}>
        <div className="profile-cont">
          <img src={profile} alt="profile" />
          <h1>Name</h1>
        </div>
        <img src={closing} alt="close" onClick={toggle} />
      </div>
      <div className={sideBar ? "nav-cont open" : "nav-cont"}>
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
    </div>
  );
};
