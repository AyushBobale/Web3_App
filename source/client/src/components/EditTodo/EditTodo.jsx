import "./EditTodo.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import {
  deleteTodoFromList,
  editTodoInList,
  getTodoFromList,
} from "../../utils/todoService";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { useDispatch, useSelector } from "react-redux";

import { CONTRACT } from "../../utils/constants";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import arrowLeft from "../../assets/images/arrow-left.svg";
import { updateState } from "../../redux/blockChainSlice";

export const EditTodo = () => {
  const theme = useSelector((state) => state.rootReducer.settings);
  const { address, isConnected } = useAccount();
  const filter = theme.state.themes?.[theme.state.activeTheme]?.svgFilter;
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [isError, setError] = useState({
    state: false,
    message: "",
  });

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

  // contracts
  const deleteTodo = useContractWrite({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.write.deleteTodo,
    args: [searchParams.get("edit-todo"), searchParams.get("list-id")],
  });
  const editTodoWrite = useContractWrite({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.write.updateTodo,
    args: [
      searchParams.get("edit-todo"),
      searchParams.get("list-id"),
      name,
      value,
    ],
  });
  const editTodoInfo = useContractRead({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.read.id2TodoItems,
    args: [searchParams.get("list-id"), searchParams.get("edit-todo")],
  });

  const delTodo = () => {
    deleteTodo.write();
    let params = Object.fromEntries(searchParams);
    delete params["list-id"];
    delete params["edit-todo"];
    setSearchParams(createSearchParams(params));
    dispatch(updateState());
  };

  const editTodo = () => {
    if (name && value) {
      editTodoWrite?.write();
      // editTodoInList(
      //   searchParams.get("list-id"),
      //   searchParams.get("edit-todo"),
      //   name,
      //   value
      // );
      // dispatch(updateState());
    } else {
      setError({
        state: true,
        message: "Todo title or description cannot be empty",
      });
    }
  };

  useEffect(() => {
    if (editTodoInfo?.data?.length) {
      setName(editTodoInfo?.data?.[1]);
      setValue(editTodoInfo?.data?.[2]);
    }
  }, [editTodoInfo?.data]);

  useEffect(() => {
    dispatch(updateState());
  }, [deleteTodo?.isSuccess, editTodoWrite?.isSuccess]);

  // useEffect(() => {
  //   setName(
  //     getTodoFromList(
  //       searchParams.get("list-id"),
  //       searchParams.get("edit-todo")
  //     )?.name
  //   );
  //   setValue(
  //     getTodoFromList(
  //       searchParams.get("list-id"),
  //       searchParams.get("edit-todo")
  //     )?.desc
  //   );
  // }, [searchParams.get("list-id"), searchParams.get("edit-todo")]);
  return (
    <div className="edit-cont">
      {isError.state && (
        <ErrorAlert
          message={isError.message}
          onClose={() => {
            setError({ state: false, message: "" });
          }}
        />
      )}
      <div className="edit-header">
        <img onClick={closeEdit} src={arrowLeft} alt="" className={filter} />{" "}
        Edit Todo
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
