import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";

export const Layout = () => {
  const sideBar = useSelector(
    (state) => state.rootReducer.settings.state.sideBar
  );
  return (
    <>
      <Header />
      <Sidebar />
      <div className={sideBar ? "main-content open" : "main-content"}>
        <Outlet />
      </div>
    </>
  );
};
