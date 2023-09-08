import { createStore, combineReducers } from "redux";

import itemReducer from "./reducers/itemReducer";

const reducers = combineReducers({
  items: itemReducer,
});

const store = createStore(reducers);

export default store;
