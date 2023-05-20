import { uuid4 } from "uuid4";

// Function to retrieve todo lists from local storage
function getTodoLists() {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  return todoLists || [];
}

// Function to save todo lists to local storage
function saveTodoLists(todoLists) {
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
}

// Function to add a new todo list
function addTodoList(name) {
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
function addTodoToList(listId, todoName, todoDesc) {
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
function toggleTodoStatus(listId, todoId) {
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
function deleteTodoFromList(listId, todoId) {
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
