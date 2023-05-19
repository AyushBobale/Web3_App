import { Outlet } from "react-router-dom";
import React from "react";

export const SectionLayout = () => {
  return (
    <div>
      <div className="section-header">
        <h2>Section</h2>
      </div>
      <div className="section-content">
        <Outlet />
      </div>
    </div>
  );
};
