import "./TodoCard.css";

import { createSearchParams, useSearchParams } from "react-router-dom";

import React from "react";
import edit from "../../assets/images/edit.svg";
import todoIcon from "../../assets/images/todoIcon.svg";

export const TodoCard = ({ id }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const openEdit = () => {
    let params = Object.fromEntries(searchParams);
    params["edit-todo"] = id || "test";
    setSearchParams(createSearchParams(params));
  };
  return (
    <div className="todo-card">
      <div className="todo-header-root">
        <div className="todo-header">
          <img src={todoIcon} alt="" />
          <h3>Header</h3>
        </div>
        <img onClick={openEdit} src={edit} alt="" />
      </div>
      <p>Content</p>
      <br />
      <p>test</p>
      <br />
      <p>test</p>
      <br />
      <p>test</p>
      <br />
      <p>test</p>
      <br />
    </div>
  );
};
