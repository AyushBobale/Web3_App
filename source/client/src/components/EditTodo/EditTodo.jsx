import "./EditTodo.css";

import React, { useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

import arrowLeft from "../../assets/images/arrow-left.svg";

export const EditTodo = ({ id }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };
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
        <textarea value={value} onChange={handleChange}></textarea>
      </div>
    </div>
  );
};
