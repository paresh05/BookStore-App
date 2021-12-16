import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  books: [],
  filteredBooks: [],
  cart: [],
};
export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_BOOKS:
      return { ...state, books: payload };
    case ActionTypes.FETCH_SEARCH_BOOKS:
      return { ...state, filteredBooks: payload };
    case ActionTypes.FETCH_CART:
      return { ...state, cart: payload };
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case ActionTypes.UPDATE_CART:
      let newCart = [...state.cart];
      newCart[payload.index] = payload.data;
      return { ...state, cart: newCart };
    case ActionTypes.DELETE_FROM_CART:
      let deleteItem = [...state.cart];
      deleteItem = deleteItem.filter((book) => book._id !== payload.data._id);
      return { ...state, cart: deleteItem };
    default:
      return state;
  }
};
