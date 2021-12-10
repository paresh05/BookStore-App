import { createStore } from "redux";
import bookReducers from "./reducers/index";

const store = createStore(
  bookReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
