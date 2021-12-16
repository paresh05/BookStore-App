import React, { useEffect, useState } from "react";
import { Box, Paper } from "@material-ui/core";
import cartApi from "../service/cartApi";
import { useDispatch } from "react-redux";
import Appbar from "../component/AppBar";
import { fetchCart } from "../actions/bookAction";
import CartItems from "../component/CartItems";
import Customer from "../component/Customer";
import OrderSummary from "../component/OrderSummary";

export default function Cart() {

  const [expanded, setExpanded] = useState(false);
  const [order, setOrder] = useState(false);
  const [customerId,setCustomerId] = useState("");
  const handleAccordion = () => {
    setExpanded(true);
  };
  const handleClose = () => {
    setExpanded(false);
    setOrder(true);
  };
  const handleId = (id) => {
    setCustomerId(id)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCarts();
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
  return (
    <>
    <Box sx={{ display: "flex" }} flexDirection="column">
      <Appbar />
      <CartItems handleAccordion={handleAccordion}/>
      <Customer expanded={expanded} handleClose={handleClose} handleId={handleId}/>
      <OrderSummary order={order} customerId={customerId} />
    </Box>
    </>
  );
}
