import { combineReducers, configureStore } from "@reduxjs/toolkit";

import settingsSlice from "./siteSettingSlice.js";

const rootReducer = combineReducers({
  settings: settingsSlice,
});

const store = configureStore({ reducer: { rootReducer } });
export default store;
