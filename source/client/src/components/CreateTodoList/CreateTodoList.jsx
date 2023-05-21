import "./CreateTodoList.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useAccount, useContractWrite } from "wagmi";
import { useDispatch, useSelector } from "react-redux";

import { CONTRACT } from "../../utils/constants";
import add from "../../assets/images/add.svg";
import { addTodoList } from "../../utils/todoService";
import { updateState } from "../../redux/blockChainSlice";

export const CreateTodoList = () => {
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();
  const [name, setName] = useState("");

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
    }
  };

  useEffect(() => {
    dispatch(updateState());
  }, [addTodoListContract?.isSuccess]);

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
