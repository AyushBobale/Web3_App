import "./EditTodo.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import {
  deleteTodoFromList,
  editTodoInList,
  getTodoFromList,
} from "../../utils/todoService";

import arrowLeft from "../../assets/images/arrow-left.svg";
import { updateState } from "../../redux/blockChainSlice";
import { useDispatch } from "react-redux";

export const EditTodo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const closeEdit = () => {
    let params = Object.fromEntries(searchParams);
    delete params["edit-todo"];
    setSearchParams(createSearchParams(params));
  };

  const editTodo = () => {
    if (name && value) {
      editTodoInList(
        searchParams.get("list-id"),
        searchParams.get("edit-todo"),
        name,
        value
      );
      dispatch(updateState());
    }
  };

  const delTodo = () => {
    deleteTodoFromList(
      searchParams.get("list-id"),
      searchParams.get("edit-todo")
    );
    let params = Object.fromEntries(searchParams);
    delete params["list-id"];
    delete params["edit-todo"];
    setSearchParams(createSearchParams(params));
    dispatch(updateState());
  };

  useEffect(() => {
    console.log(searchParams.get("list-id"), searchParams.get("edit-todo"));
    setName(
      getTodoFromList(
        searchParams.get("list-id"),
        searchParams.get("edit-todo")
      )?.name
    );
    setValue(
      getTodoFromList(
        searchParams.get("list-id"),
        searchParams.get("edit-todo")
      )?.desc
    );
  }, [searchParams.get("list-id"), searchParams.get("edit-todo")]);
  return (
    <div className="edit-cont">
      <div className="edit-header">
        <img onClick={closeEdit} src={arrowLeft} alt="" /> Edit Todo
      </div>
      <div className="edit-body">
        <input type="text" value={name} onChange={handleNameChange} />
        <textarea value={value} onChange={handleChange}></textarea>
        <button className="btn-dark" onClick={editTodo}>
          Save
        </button>
        <button className="btn-dark" onClick={delTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};
