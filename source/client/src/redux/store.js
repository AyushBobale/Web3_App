import { combineReducers, configureStore } from "@reduxjs/toolkit";

import accountSlice from "./blockChainSlice.js";
import settingsSlice from "./siteSettingSlice.js";

const rootReducer = combineReducers({
  settings: settingsSlice,
  account: accountSlice,
});

const store = configureStore({ reducer: { rootReducer } });
export default store;
