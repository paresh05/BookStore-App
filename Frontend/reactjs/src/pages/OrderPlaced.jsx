import React, { useEffect, useState } from "react";
import cartApi from "../service/cartApi";
import { Button, Grid, Typography } from "@mui/material";
import order from "../assets/Order.PNG";
import { Redirect } from "react-router-dom";
import Appbar from "../component/AppBar";
export default function CartItems() {
  const [redirect, setRedirect] = useState(false);
  const [orderId, setOrderId] = useState("");
  console.log(orderId);
  const handleOrder = () => {
    cartApi
      .getOrder()
      .then((response) => {
        console.log(response.data);
        setOrderId(response.data[0].orderdOn)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    handleOrder();
  }, []);
  return (
    <Grid container spacing={2}>
      <Appbar />
      <Grid item xs={12} style={{ paddingTop: "70px" }}>
        <img src={order} alt="Loading" width="250px" height="220px" />
      </Grid>
      <Grid item xs={12} align="center">
        <Typography
          width={"330px"}
          style={{
            fontSize: "18px",
            lineHeight: "22px",
            letterSpacing: "0px",
            color: "#333232",
            opacity: 1,
          }}
        >
          hurray!!! your order is confirmed the order id is {orderId} save the
          order id for further communication..
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <table border="1" cellpadding="15" cellspacing="0" align="center">
          <thead>
            <tr>
              <th>Email us</th>
              <th>Contact us</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin@bookstore.com</td>
              <td>+91 8163475881</td>
              <td style={{ width: "350px" }} align="left">
                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                Kumarakom restaurant, HSR Layout, Bangalore 560034
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          type="submit"
          style={{
            background: "#3371B5",
            color: "white",
            width: "200px",
            height: "35px",
          }}
          onClick={() => {
            setRedirect(true);
          }}
        >
          Continue Shopping
        </Button>
      </Grid>
      {redirect ? <Redirect to="/bookstore" /> : null}
    </Grid>
  );
}
