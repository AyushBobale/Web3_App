// import { uuid4 } from "uuid4";

import { v4 as uuidv4 } from "uuid";

// Function to retrieve todo lists from local storage
export function getTodoLists() {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  return todoLists || [];
}

export function getTodoListsPaginated(page, pageSize) {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  if (!todoLists?.length) {
    return { total: 0, data: [], page: 0 };
  }
  let total = Math.ceil((todoLists.length + 1) / pageSize);
  let startPos = page * pageSize || 0;
  let endPos = startPos + pageSize;
  return { total: total, data: todoLists?.slice(startPos, endPos), page: page };
}

// Function to save todo lists to local storage
export function saveTodoLists(todoLists) {
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
}

// Function to add a new todo list
export function addTodoList(name) {
  const todoList = {
    id: uuidv4(),
    name: name,
    todos: [],
  };

  const todoLists = getTodoLists();
  todoLists.push(todoList);
  saveTodoLists(todoLists);
}

// Function to add a new todo to a specific todo list
export function addTodoToList(listId, todoName, todoDesc) {
  const todo = {
    id: uuidv4(),
    name: todoName,
    desc: todoDesc,
    isDone: false,
  };

  const todoLists = getTodoLists();
  const todoList = todoLists.find((list) => list.id === listId);
  if (todoList) {
    todoList.todos.push(todo);
    saveTodoLists(todoLists);
  }
}

// Function to mark a todo as done or undone
export function toggleTodoStatus(listId, todoId) {
  const todoLists = getTodoLists();
  const todoList = todoLists.find((list) => list.id === listId);
  if (todoList) {
    const todo = todoList.todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.isDone = !todo.isDone;
      saveTodoLists(todoLists);
    }
  }
}

// Function to delete a todo from a specific todo list
export function deleteTodoFromList(listId, todoId) {
  const todoLists = getTodoLists();
  const todoList = todoLists.find((list) => list.id === listId);
  if (todoList) {
    const todoIndex = todoList.todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) {
      todoList.todos.splice(todoIndex, 1);
      saveTodoLists(todoLists);
    }
  }
}
