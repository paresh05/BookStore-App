import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Appbar from "../component/AppBar";
import userConnect from "../service/booksApi";
import cartApi from "../service/cartApi";
import { fetchAllBooks, fetchCart } from "../actions/bookAction";
import { useDispatch } from "react-redux";
import Books from "../component/Books";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    userConnect
      .getBooks(1)
      .then((response) => {
        dispatch(fetchAllBooks(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Appbar />
      <Books />
    </Box>
  );
}
