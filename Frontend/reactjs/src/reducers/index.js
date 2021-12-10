import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";

const bookReducers = combineReducers({
  allBooks: bookReducer,
});

export default bookReducers;
