import "./Section8.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useBlockNumber, useContractRead } from "wagmi";
import { useDispatch, useSelector } from "react-redux";

import { CONTRACT } from "../../utils/constants";
import { CreateTodoList } from "../../components/CreateTodoList/CreateTodoList";
import { EditTodo } from "../../components/EditTodo/EditTodo";
import { PaginationNavigator } from "../../components/PaginationNavigator/PaginationNavigator";
import { TodoList } from "../../components/TodoList/TodoList";
import { getTodoListsPaginated } from "../../utils/todoService";
import { setTodoLists } from "../../redux/blockChainSlice";

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

  // const { data, isError, isLoading } = useContractRead(
  //   {
  //     addressOrName: CONTRACT.address,
  //     contractInterface: CONTRACT.todoListABI,
  //   },
  //   CONTRACT.contracts.read.getUserIds
  // );
  // const { data, isError, isLoading } = useBlockNumber();
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.read.getTodos,
    args: ["0xDD9eaE13D20284248dBbdBF750369aBbCD71465b"],
  });

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
    // console.log(todoLists);
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
