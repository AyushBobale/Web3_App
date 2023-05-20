import "./Section8.css";

import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

import { CreateTodoList } from "../../components/CreateTodoList/CreateTodoList";
import { EditTodo } from "../../components/EditTodo/EditTodo";
import { PaginationNavigator } from "../../components/PaginationNavigator/PaginationNavigator";
import { TodoList } from "../../components/TodoList/TodoList";
import { getTodoListsPaginated } from "../../utils/localStorageTodo";
import { useSelector } from "react-redux";

export const Section8 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateDone = useSelector(
    (state) => state.rootReducer.account.updateDone
  );
  const [todoLists, setTodoLists] = useState({
    total: 0,
    data: [],
    page: 0,
  });

  const setPage = (page) => {
    let params = Object.fromEntries(searchParams);
    params["page"] = page;
    setSearchParams(createSearchParams(params));
  };

  useEffect(() => {
    setTodoLists(getTodoListsPaginated(searchParams.get("page") || 0, 3));
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
          {todoLists?.data?.length < 3 && (
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
