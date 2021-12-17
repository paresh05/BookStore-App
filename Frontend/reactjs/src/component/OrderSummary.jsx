import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import cartApi from "../service/cartApi";
import { Button, Grid, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function CartItems(props) {
  const [redirect, setRedirect] = useState(false);
  const myCart = useSelector((state) => state.allBooks.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const handlePrice = () => {
    var price = 0;
    myCart.map((books) => {
      price = books.numOfItems * books.price + price;
      setTotalPrice(price);
    });
  };
  const handleOrder = () => {
    let data = {
      customerId: props.customerId,
      items: myCart,
      totalPrice: totalPrice,
      status: "dispatched",
    };
    cartApi
      .addOrder(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    cartApi
      .deleteAllItems()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setRedirect(true);
  };
  useEffect(() => {
    handlePrice();
  }, [myCart]);
  return (
    <Grid
      container
      spacing={4}
      style={{ paddingTop: 65, paddingLeft: "210px" }}
    >
      <Accordion
        expanded={props.order == true}
        sx={{ width: "774px" }}
        square
        variant="outlined"
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography
            variant="h6"
            style={{ width: "33%", flexShrink: 0, color: "#333232" }}
          >
            Order Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12} align="left">
            <Card
              sx={{
                width: "740px",
              }}
              elevation={0}
            >
              {myCart.map((books) => (
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <CardMedia
                      component="img"
                      alt="images"
                      sx={{
                        width: "65px",
                      }}
                      height="85px"
                      image={books.image}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <CardContent>
                      <Typography
                        variant="body1"
                        noWrap
                        style={{
                          textAlign: "left",
                          fontSize: "14px",
                          lineHeight: "17px",
                          letterSpacing: "0px",
                          color: "#0A0102",
                          opacity: 1,
                        }}
                        gutterBottom
                        component="div"
                      >
                        {books.title}
                      </Typography>
                      <Typography
                        style={{
                          height: "20px",
                          overflow: "hidden",
                          fontSize: "10px",
                          lineHeight: "12px",
                          letterSpacing: "0px",
                          color: "#9D9D9D",
                          opacity: 1,
                        }}
                      >
                        by {books.author}
                      </Typography>

                      <Typography
                        style={{
                          height: "20px",
                          overflow: "hidden",
                          fontSize: "15px",
                          lineHeight: "18px",
                          fontWeight: "bold",
                          letterSpacing: "0px",
                          color: "#0A0102",
                          opacity: 1,
                        }}
                      >
                        Rs.{books.numOfItems * books.price}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              ))}
              <Stack spacing={14} direction="row-reverse">
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  style={{
                    background: "#3371B5",
                    color: "white",
                    width: "151px",
                    height: "35px",
                  }}
                  onClick={handleOrder}
                >
                  Checkout
                </Button>
                <Typography
                  style={{
                    height: "20px",
                    overflow: "hidden",
                    fontSize: "15px",
                    lineHeight: "18px",
                    fontWeight: "bold",
                    letterSpacing: "0px",
                    color: "#0A0102",
                    opacity: 1,
                  }}
                >
                  Total Price: Rs.{totalPrice}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {redirect ? <Redirect to="/bookstore/orderPlaced" /> : null}
    </Grid>
  );
}
