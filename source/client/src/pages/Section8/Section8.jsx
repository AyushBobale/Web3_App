import "./Section8.css";

import { CreateTodoList } from "../../components/CreateTodoList/CreateTodoList";
import { EditTodo } from "../../components/EditTodo/EditTodo";
import React from "react";
import { TodoCard } from "../../components/TodoCard/TodoCard";
import { TodoList } from "../../components/TodoList/TodoList";
import { useSearchParams } from "react-router-dom";

export const Section8 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
          <TodoList />
        </div>
        <div className="todo-cont">
          <TodoList />
        </div>
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
