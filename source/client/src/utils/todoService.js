// import { uuid4 } from "uuid4";

import { v4 as uuidv4 } from "uuid";

const USE_LOCAL = true;

function getTodoLists_LocalStorage() {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  return todoLists || [];
}

export function getTodoLists() {
  if (USE_LOCAL) {
    return getTodoLists_LocalStorage();
  }
}

//---------------------------------------------

function getTodoListsPaginated_LocalStorage(page, pageSize) {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  if (!todoLists?.length) {
    return { total: 0, data: [], page: 0 };
  }
  let total = Math.ceil((todoLists.length + 1) / pageSize);
  let startPos = page * pageSize || 0;
  let endPos = startPos + pageSize;
  return {
    total: total,
    data: todoLists?.slice(startPos, endPos),
    page: page,
  };
}

export function getTodoListsPaginated(page, pageSize) {
  if (USE_LOCAL) {
    return getTodoListsPaginated_LocalStorage(page, pageSize);
  }
}

//---------------------------------------------

function saveTodoLists_LocalStorage(todoLists) {
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
}

export function saveTodoLists(todoLists) {
  if (USE_LOCAL) {
    return saveTodoLists_LocalStorage(todoLists);
  }
}

//---------------------------------------------

function addTodoList_LocalStorage(name) {
  const todoList = {
    id: uuidv4(),
    name: name,
    todos: [],
  };

  const todoLists = getTodoLists();
  todoLists.push(todoList);
  saveTodoLists(todoLists);
}

export function addTodoList(name) {
  if (USE_LOCAL) {
    return addTodoList_LocalStorage(name);
  }
}

//---------------------------------------------

function addTodoToList_LocalStorage(listId, todoName, todoDesc) {
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

export function addTodoToList(listId, todoName, todoDesc) {
  if (USE_LOCAL) {
    return addTodoToList_LocalStorage(listId, todoName, todoDesc);
  }
}

//---------------------------------------------
function editTodoList_LocalStorgae(listId, todoId, name, desc) {
  const todo = {
    id: todoId,
    name: name,
    desc: desc,
    isDone: false,
  };
  const todoLists = getTodoLists();
  const todoList = todoLists.find((list) => list.id === listId);
  if (todoList) {
    let idx = todoList.todos.findIndex((item) => item.id === todoId);
    todoList.todos[idx] = todo;
    let listIdx = todoLists.findIndex((list) => list.id === listId);
    todoLists[listIdx] = todoList;
    saveTodoLists(todoLists);
  }
}

export function editTodoInList(listId, todoId, name, desc) {
  if (USE_LOCAL) {
    editTodoList_LocalStorgae(listId, todoId, name, desc);
  }
}

//---------------------------------------------

function deleteTodoList_LocalStorgae(listId, todoId) {
  // const todo = {
  //   id: todoId,
  //   name: name,
  //   desc: desc,
  //   isDone: false,
  // };
  const todoLists = getTodoLists();
  const todoList = todoLists.find((list) => list.id === listId);
  if (todoList) {
    let idx = todoList.todos.findIndex((item) => item.id === todoId);
    let newList = todoList.todos.splice(idx, 1);
    let listIdx = todoLists.findIndex((list) => list.id === listId);
    todoLists[listIdx] = newList;
    saveTodoLists(todoLists);
  }
}

export function deleteTodoInList(listId, todoId) {
  if (USE_LOCAL) {
    deleteTodoList_LocalStorgae(listId, todoId);
  }
}

//---------------------------------------------

function getTodoFromList_LocalStorage(listId, todoId) {
  const todoLists = getTodoLists();
  const todoList = todoLists.find((list) => list.id === listId);
  if (todoList) {
    let item = todoList.todos.find((item) => item.id === todoId);
    return item;
  }
  return {};
}

export function getTodoFromList(listId, todoId) {
  if (USE_LOCAL) {
    return getTodoFromList_LocalStorage(listId, todoId);
  }
}
//---------------------------------------------
// Not used
//------------------------------------------

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

//---------------------------------------------
//  currently not used
// --------------------------------------------
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
