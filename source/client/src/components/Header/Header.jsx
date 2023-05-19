import "./header.css";

import React from "react";
import { toggleSidebar } from "../../redux/siteSettingSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispath = useDispatch();
  const toggle = () => {
    dispath(toggleSidebar());
  };
  return (
    <div className="header-cont" onClick={toggle}>
      <div className="header-inner">
        Lorem Ipsum is simply dummy text of the printing
      </div>
    </div>
  );
};

export default Header;
