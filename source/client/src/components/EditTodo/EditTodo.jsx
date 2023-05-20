import "./EditTodo.css";

import { createSearchParams, useSearchParams } from "react-router-dom";

import React from "react";
import arrowLeft from "../../assets/images/arrow-left.svg";

export const EditTodo = ({ id }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const closeEdit = () => {
    let params = Object.fromEntries(searchParams);
    delete params["edit-todo"];
    setSearchParams(createSearchParams(params));
  };
  return (
    <div className="edit-cont">
      <div className="edit-header">
        <img onClick={closeEdit} src={arrowLeft} alt="" /> Edit Todo
      </div>
      <div className="edit-body">
        <input type="text" />
        <textarea name="" id=""></textarea>
      </div>
    </div>
  );
};
