import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    isConnected: false,
    address: null,
    ensName: null,
  },
  todoLists: {
    total: 1,
    data: [],
    page: 0,
  },
  todoListsAll: {
    total: 1,
    data: [],
    page: 0,
  },
  updateDone: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setInfo: (state, { payload }) => {
      state.info = payload;
    },
    updateState: (state, { payload }) => {
      state.updateDone = !state.updateDone;
    },
    setTodoLists: (state, { payload }) => {
      state.todoLists = payload;
    },
    setTodoListsAll: (state, { payload }) => {
      state.todoListsAll = payload.todo;
    },
  },
});

export const { setInfo, updateState, setTodoLists, setTodoListsAll } =
  accountSlice.actions;
export default accountSlice.reducer;
