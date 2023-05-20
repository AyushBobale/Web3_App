import "./TodoList.css";
import "../TodoCard/TodoCard.css";

import React, { useState } from "react";

import { TodoCard } from "../TodoCard/TodoCard";
import add from "../../assets/images/add.svg";
import { addTodoToList } from "../../utils/localStorageTodo";
import edit from "../../assets/images/edit.svg";
import todoIcon from "../../assets/images/todoIcon.svg";
import { updateState } from "../../redux/blockChainSlice";
import { useDispatch } from "react-redux";

export const TodoList = ({ todolist }) => {
  const [value, setValue] = useState("");
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const addTodo = () => {
    if (value && todoName) {
      addTodoToList(todolist?.id, todoName, value);
      setValue("");
      setTodoName("");
      dispatch(updateState());
    }
  };

  return (
    <div className="todo-list-indv-cont">
      <div className="todo-list-name">{todolist?.name}</div>
      <div className="todo-card-create">
        {/* <div className="todo-header-root"> */}
        <div className="todo-header-create">
          <img src={todoIcon} alt="" />
          <input
            type="text"
            value={todoName}
            onChange={handleNameChange}
            placeholder="Add Todo"
          />
          <img className="add-img" src={add} onClick={addTodo} alt="" />
          {/* </div> */}
        </div>
        <textarea
          value={value}
          onChange={handleChange}
          placeholder="Add to do description"
        ></textarea>
      </div>
      {todolist?.todos?.map((elm) => (
        <TodoCard todo={elm} />
      ))}
    </div>
  );
};
