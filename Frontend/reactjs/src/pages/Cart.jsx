import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import userConnect from "../service/cartApi";
import { useDispatch } from "react-redux";
import Appbar from "../component/AppBar";
import { fetchCart } from "../actions/bookAction";
import CartItems from "../component/CartItems";

export default function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = () => {
    userConnect
      .getCart()
      .then((response) => {
        dispatch(fetchCart(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar />
      <CartItems />
    </Box>
  );
}
