import "./TodoCard.css";

import React from "react";
import edit from "../../assets/images/edit.svg";
import todoIcon from "../../assets/images/todoIcon.svg";

export const TodoCard = () => {
  return (
    <div className="todo-card">
      <div className="todo-header-root">
        <div className="todo-header">
          <img src={todoIcon} alt="" />
          <h3>Header</h3>
        </div>
        <img src={edit} alt="" />
      </div>
      <p>Content</p>
    </div>
  );
};
