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
  allLists: [],
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
      state.allLists = payload.todo;
      let total = Math.ceil((payload.todo?.length + 1) / payload.pageSize);
      let startPos = parseInt(payload.page * (payload.pageSize || 0));
      let endPos = parseInt(startPos + payload.pageSize);
      state.todoLists = {
        total: total,
        data: payload.todo?.slice(startPos, endPos),
        payload: parseInt(payload.page),
      };
    },
  },
});

export const { setInfo, updateState, setTodoLists, setTodoListsAll } =
  accountSlice.actions;
export default accountSlice.reducer;
