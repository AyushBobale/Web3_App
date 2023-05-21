import "./TodoList.css";
import "../TodoCard/TodoCard.css";

import React, { useEffect, useState } from "react";
import { useAccount, useContractWrite } from "wagmi";

import { CONTRACT } from "../../utils/constants";
import { TodoCard } from "../TodoCard/TodoCard";
import add from "../../assets/images/add.svg";
import { addTodoToList } from "../../utils/todoService";
import dash from "../../assets/images/Path.svg";
import edit from "../../assets/images/edit.svg";
import todoIcon from "../../assets/images/todoIcon.svg";
import { updateState } from "../../redux/blockChainSlice";
import { useDispatch } from "react-redux";

export const TodoList = ({ todolist }) => {
  const [value, setValue] = useState("");
  const { address, isConnected } = useAccount();
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();

  // contracts
  const deleteTodoList = useContractWrite({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.write.removeList,
    args: [todolist?.id],
  });

  const addTodoContract = useContractWrite({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.write.addTodo,
    args: [todolist?.id, todoName, value],
  });

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
      addTodoContract.write();
      // addTodoToList(todolist?.id, todoName, value);

      dispatch(updateState());
    }
  };

  const delTodoList = () => {
    deleteTodoList.write();
  };

  useEffect(() => {
    dispatch(updateState());
    setValue("");
    setTodoName("");
  }, [
    deleteTodoList?.isSuccess,
    deleteTodoList?.isLoading,
    addTodoContract?.isSuccess,
    addTodoContract?.isLoading,
  ]);

  return (
    <div className="todo-list-indv-cont">
      <div className="todo-list-name">
        {todolist?.id}
        <img src={dash} onClick={() => delTodoList()} alt="" />
      </div>
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
      {todolist?.todos?.map((elm, idx) => (
        <TodoCard todo={elm} todoListId={todolist?.id} idx={idx} />
      ))}
    </div>
  );
};
