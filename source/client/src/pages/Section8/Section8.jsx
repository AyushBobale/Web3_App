import "./Section8.css";

import React, { useEffect } from "react";

import { CreateTodoList } from "../../components/CreateTodoList/CreateTodoList";
import { EditTodo } from "../../components/EditTodo/EditTodo";
import { getTodoListsPaginated } from "../../utils/localStorageTodo";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Section8 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateDone = useSelector(
    (state) => state.rootReducer.account.updateDone
  );

  useEffect(() => {
    console.log(getTodoListsPaginated(0, 3));
  }, [updateDone]);

  return (
    <div className="section-content">
      <div
        className={
          searchParams.get("edit-todo")
            ? "todo-list-cont open"
            : "todo-list-cont"
        }
      >
        <div className="todo-cont">
          <CreateTodoList />
        </div>
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
  );
};
