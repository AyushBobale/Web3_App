import "./Sidebar.css";

import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const sideBar = useSelector(
    (state) => state.rootReducer.settings.state.sideBar
  );
  console.log(sideBar);
  return (
    <div className={sideBar ? "sidebar open" : "sidebar"}>
      <h2>Test</h2>
    </div>
  );
};
