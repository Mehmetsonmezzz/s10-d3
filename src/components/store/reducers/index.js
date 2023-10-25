import { combineReducers } from "redux";

import favReducer from "./favReducer";

export const reducers = combineReducers({
  favorites: favReducer,
});
