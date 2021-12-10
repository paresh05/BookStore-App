import { ActionTypes } from "../constants/actionTypes";
export const fetchAllBooks = (books) => {
  return {
    type: ActionTypes.FETCH_BOOKS,
    payload: books,
  };
};

export const fetchFilteredBooks = (books) => {
  return {
    type: ActionTypes.FETCH_SEARCH_BOOKS,
    payload: books,
  };
};
