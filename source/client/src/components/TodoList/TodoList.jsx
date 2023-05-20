import "./TodoList.css";
import "../TodoCard/TodoCard.css";

import React, { useState } from "react";

import { TodoCard } from "../TodoCard/TodoCard";
import edit from "../../assets/images/edit.svg";
import todoIcon from "../../assets/images/todoIcon.svg";

export const TodoList = ({ id }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  return (
    <div className="todo-list-indv-cont">
      <div className="todo-list-name">List Name</div>
      <div className="todo-card">
        <div className="todo-header-root">
          <div className="todo-header">
            <img src={todoIcon} alt="" />
            <input type="text" placeholder="Add Todo" />
          </div>
          <img src={edit} alt="" />
        </div>
        <textarea
          value={value}
          onChange={handleChange}
          placeholder="Add to do description"
        ></textarea>
      </div>
      {[1, 2, 3, 4, 5, 6]?.map((elm) => (
        <TodoCard />
      ))}
    </div>
  );
};
