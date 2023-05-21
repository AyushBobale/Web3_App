import "./CreateTodoList.css";

import React, { useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import add from "../../assets/images/add.svg";
import { addTodoList } from "../../utils/todoService";
import { updateState } from "../../redux/blockChainSlice";

export const CreateTodoList = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    if (name) {
      dispatch(updateState());
      addTodoList(name);
      setName("");
    }
  };

  return (
    <div className="create-todo-list-cont">
      <input
        type="text"
        value={name}
        onChange={changeHandler}
        placeholder="Create Todo List"
      />
      <img src={add} onClick={handleAdd} alt="" />
    </div>
  );
};
