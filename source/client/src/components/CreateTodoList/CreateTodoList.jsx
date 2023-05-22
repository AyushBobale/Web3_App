import "./CreateTodoList.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useAccount, useContractWrite } from "wagmi";
import { useDispatch, useSelector } from "react-redux";

import { CONTRACT } from "../../utils/constants";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import add from "../../assets/images/add.svg";
import { addTodoList } from "../../utils/todoService";
import { updateState } from "../../redux/blockChainSlice";

export const CreateTodoList = () => {
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();
  const [name, setName] = useState("");
  const [isError, setError] = useState({
    state: false,
    message: "",
  });

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  // contracts
  const addTodoListContract = useContractWrite({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.write.addList,
    args: [name],
  });

  const handleAdd = () => {
    if (name) {
      // addTodoList(name);
      addTodoListContract?.write();
      setName("");
    } else {
      setError({ state: true, message: "List Name cannot be empty" });
    }
  };

  useEffect(() => {
    dispatch(updateState());
  }, [addTodoListContract?.isSuccess]);

  return (
    <div className="create-todo-list-cont">
      {isError.state && (
        <ErrorAlert
          message={isError.message}
          onClose={() => {
            setError({ state: false, message: "" });
          }}
        />
      )}
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
