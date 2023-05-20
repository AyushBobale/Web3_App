import "./CreateTodoList.css";

import React from "react";
import add from "../../assets/images/add.svg";

export const CreateTodoList = () => {
  return (
    <div className="create-todo-list-cont">
      <input type="text" placeholder="Create Todo List" />
      <img src={add} alt="" />
    </div>
  );
};
