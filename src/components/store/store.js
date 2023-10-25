import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";
import { combineReducers } from "redux";

export const myStore = createStore(reducers);
