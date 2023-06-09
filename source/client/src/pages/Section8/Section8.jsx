import "./Section8.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { setTodoLists, setTodoListsAll } from "../../redux/blockChainSlice";
import {
  useAccount,
  useBlockNumber,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useSendTransaction,
} from "wagmi";
import { useDispatch, useSelector } from "react-redux";

import { CONTRACT } from "../../utils/constants";
import { CreateTodoList } from "../../components/CreateTodoList/CreateTodoList";
import { EditTodo } from "../../components/EditTodo/EditTodo";
import { PaginationNavigator } from "../../components/PaginationNavigator/PaginationNavigator";
import { TodoList } from "../../components/TodoList/TodoList";
import { getTodoListsPaginated } from "../../utils/todoService";

export const Section8 = () => {
  const { address, isConnected } = useAccount();
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

  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT.address,
    abi: CONTRACT.todoListABI,
    functionName: CONTRACT.contracts.read.getTodos,
    args: [address],
  });

  useEffect(() => {
    if (data?.length) {
      dispatch(
        setTodoListsAll({
          todo: data,
          pageSize: TODO_LISTS_PER_PAGE,
          page: parseInt(searchParams.get("page")) || 0,
        })
      );
    }
  }, [isConnected, searchParams.get("page")]);

  // useEffect(() => {
  //   dispatch(
  //     setTodoLists(
  //       getTodoListsPaginated(
  //         searchParams.get("page") || 0,
  //         TODO_LISTS_PER_PAGE
  //       )
  //     )
  //   );
  // }, [updateDone, searchParams.get("page")]);

  return (
    <div className="pagi-outer-cont">
      <PaginationNavigator
        total={todoLists?.total || 0}
        pagePerView={3}
        setPage={setPage}
        activePage={searchParams.get("page") || 0}
      />
      <div className="section-content">
        {/* <button className="btn-light" onClick={() => clickHandler()}> */}
        {/* Run contract */}
        {/* </button> */}
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
