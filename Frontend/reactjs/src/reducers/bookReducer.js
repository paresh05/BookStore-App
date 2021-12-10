import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  books: [],
  filteredBooks: [],
};
export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_BOOKS:
      return { ...state, books: payload };
    case ActionTypes.FETCH_SEARCH_BOOKS:
      return { ...state, filteredBooks: payload };
    default:
      return state;
  }
};
