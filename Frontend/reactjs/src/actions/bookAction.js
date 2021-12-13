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

export const fetchCart = (book) => {
  return {
    type: ActionTypes.FETCH_CART,
    payload: book,
  };
};

export const addCart = (book) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: book,
  };
};

export const updateCart = (book) => {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: book,
  };
};
