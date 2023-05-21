import "./Section8.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CONTRACT } from "../../utils/constants";
import { CreateTodoList } from "../../components/CreateTodoList/CreateTodoList";
import { EditTodo } from "../../components/EditTodo/EditTodo";
import { PaginationNavigator } from "../../components/PaginationNavigator/PaginationNavigator";
import { TodoList } from "../../components/TodoList/TodoList";
import { getTodoListsPaginated } from "../../utils/todoService";
import { setTodoLists } from "../../redux/blockChainSlice";
import { useContractRead } from "wagmi";

export const Section8 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const updateDone = useSelector(
    (state) => state.rootReducer.account.updateDone
  );
  const TODO_LISTS_PER_PAGE = 3;
  const todoLists = useSelector((state) => state.rootReducer.account.todoLists);

  const setPage = (page) => {
    let params = Object.fromEntries(searchParams);
    params["page"] = page;
    setSearchParams(createSearchParams(params));
  };

  const { data, isError, isLoading } = useContractRead(
    {
      addressOrName: CONTRACT.address,
      contractInterface: CONTRACT.todoListABI,
    },
    CONTRACT.contracts.read.getUserIds
  );
  // const { data, isError, isLoading } = useContractRead(
  //   {
  //     addressOrName: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //     contractInterface: [
  //       { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "caretaker",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "CaretakerLoved",
  //         type: "event",
  //       },
  //       {
  //         inputs: [],
  //         name: "clean",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "feed",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getAlive",
  //         outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getBoredom",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getHunger",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getSleepiness",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getStatus",
  //         outputs: [{ internalType: "string", name: "", type: "string" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getUncleanliness",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [{ internalType: "address", name: "", type: "address" }],
  //         name: "love",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "play",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "sleep",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   "getHunger"
  // );
  console.log(data, isError, isLoading);

  useEffect(() => {
    dispatch(
      setTodoLists(
        getTodoListsPaginated(
          searchParams.get("page") || 0,
          TODO_LISTS_PER_PAGE
        )
      )
    );
    console.log(todoLists);
  }, [updateDone, searchParams.get("page")]);

  return (
    <div className="pagi-outer-cont">
      <PaginationNavigator
        total={todoLists.total}
        pagePerView={3}
        setPage={setPage}
        activePage={searchParams.get("page") || 0}
      />
      <div className="section-content">
        <div
          className={
            searchParams.get("edit-todo")
              ? "todo-list-cont open"
              : "todo-list-cont"
          }
        >
          {todoLists?.data?.map((elm) => {
            return (
              <div className="todo-cont">
                <TodoList todolist={elm} />
              </div>
            );
          })}
          {todoLists?.data?.length < TODO_LISTS_PER_PAGE && (
            <div className="todo-cont">
              <CreateTodoList />
            </div>
          )}
        </div>
        <div
          className={
            searchParams.get("edit-todo")
              ? "todo-edit-container open"
              : "todo-edit-container"
          }
        >
          <EditTodo id={"temp"} />
        </div>
      </div>
    </div>
  );
};
