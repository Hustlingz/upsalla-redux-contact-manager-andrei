import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducerjs";

 const mainReducer = combineReducers({
    counter: counterReducer,
 });

const store = createStore({ counter: counterReducer });

export default store;
