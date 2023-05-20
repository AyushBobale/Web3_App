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
  },
});

export const { setInfo, updateState, setTodoLists } = accountSlice.actions;
export default accountSlice.reducer;
