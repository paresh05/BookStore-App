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
    <Grid style={{ paddingTop: 20, paddingLeft: "12%", paddingBottom:"20px"}}>
      <Accordion
        expanded={props.order == true}
        sx={{ maxWidth: "774px", width: "90%" }}
        square
        variant="outlined"
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography
            id="OrderSummary"
            variant="h6"
            style={{ color: "#333232" }}
          >
            Order Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container item xs={12} align="left">
            <Card
              sx={{
                maxWidth: "740px",
                width: "100%",
              }}
              elevation={0}
            >
              {myCart.map((books) => (
                <Grid container style={{ marginLeft: "15px" }}>
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
              <Grid item xs={9} align="right">
                <Typography
                  id="totalPrice"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "0px",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#0A0102",
                    opacity: 1,
                  }}
                >
                  Total Price: Rs.{totalPrice}
                </Typography>
              </Grid>
              <Grid item xs={12} align="right" style={{paddingTop:"20px"}}>
                <Button
                  id="checkout"
                  type="submit"
                  value="Submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={{
                    maxWidth: "160px",
                    backgroundColor: "#3371B5",
                    color: "white",
                  }}
                  onClick={handleOrder}
                >
                  Checkout
                </Button>
              </Grid>
            </Card>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {redirect ? <Redirect to="/bookstore/orderPlaced" /> : null}
    </Grid>
  );
}
