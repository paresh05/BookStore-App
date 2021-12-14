import React, { useEffect } from "react";
import { Box, Paper } from "@material-ui/core";
import cartApi from "../service/cartApi";
import { useDispatch } from "react-redux";
import Appbar from "../component/AppBar";
import { fetchCart } from "../actions/bookAction";
import CartItems from "../component/CartItems";
import Customer from "../component/Customer";

export default function Cart() {

  const [expanded, setExpanded] = React.useState(false);

  const handleAccordion = () => {
    setExpanded(true);
  };
  const handleClose = () => {
    setExpanded(false);
  };
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
      <Customer expanded={expanded} handleClose={handleClose}/>
    </Box>
    </>
  );
}
