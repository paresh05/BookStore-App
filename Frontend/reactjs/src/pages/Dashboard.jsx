import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import Appbar from "../component/AppBar";
import userConnect from "../service/booksApi";
import cartApi from "../service/cartApi";
import { fetchAllBooks, fetchCart } from "../actions/bookAction";
import { useDispatch } from "react-redux";
import Books from "../component/Books";

export default function Dashboard() {
  const dispatch = useDispatch();

  const [noOfBooks, setNoOfBooks] = useState(0);

  useEffect(() => {
    fetchCarts();
    fetchBooks();
  }, []);

  const fetchCarts = () => {
    cartApi
      .getCart()
      .then((response) => {
        dispatch(fetchCart(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchBooks = () => {
    userConnect
      .getBooks(1, "no")
      .then((response) => {
        dispatch(fetchAllBooks(response.data.books));
        setNoOfBooks(response.data.count);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Appbar />
      <Books noOfBooks={noOfBooks}/>
    </Box>
  );
}
