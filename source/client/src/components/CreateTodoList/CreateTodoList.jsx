import "./CreateTodoList.css";

import React, { useState } from "react";

import add from "../../assets/images/add.svg";
import { addTodoList } from "../../utils/localStorageTodo";
import { updateState } from "../../redux/blockChainSlice";
import { useDispatch } from "react-redux";

export const CreateTodoList = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

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
