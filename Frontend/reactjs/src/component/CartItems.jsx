import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartApi from "../service/cartApi";
import { Box, IconButton, Stack } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { updateCart } from "../actions/bookAction";

export default function CartItems(props) {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.allBooks.cart);
  const handleIncrement = (book,index) => {
    let data = {
      cartId: book._id,
      numOfItems: book.numOfItems+1,
    }
    cartApi
      .updateCart(data)
      .then((responce) => {
        dispatch(updateCart({data:responce.data, index:index}))
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDecrement = (book,index) => {
    if (book.numOfItems !== 1) {
      let data = {
        cartId: book._id,
        numOfItems: book.numOfItems-1,
      }
      cartApi
      .updateCart(data)
      .then((responce) => {
        dispatch(updateCart({data:responce.data, index:index}))
      })
      .catch((e) => {
        console.log(e);
      });
    } 
  };
  return (
    <Grid
      container
      spacing={4}
      style={{ paddingTop: 100, paddingLeft: "177px" }}
    >
      {myCart.map((book, index) => (
        <Grid item xs={12} align="left">
          <Card
            variant="outlined"
            sx={{
              width: "774px",
              height: "241px",
            }}
            key={index}
          >
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
                    marginTop: "65px",
                  }}
                  height="85px"
                  image={book.image}
                />
              </Grid>
              <Grid item xs={9}>
                <CardContent sx={{ marginTop: "40px" }}>
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
                    {book.title}
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
                    by {book.author}
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
                    Rs.{book.price}
                  </Typography>
                </CardContent>
                <Stack direction="row">
                  <IconButton onClick={()=>{handleIncrement(book,index)}}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <Box
                    sx={{
                      marginTop: "7px",
                      width: "41px",
                      height: "24px",
                      border: 2,
                      borderColor: "#DBDBDB",
                      borderRadius: "1px",
                      textAlign: "center",
                    }}
                  >
                    {book.numOfItems}
                  </Box>
                  <IconButton onClick={()=>handleDecrement(book,index)}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </Stack>
                <Stack spacing={2} direction="row-reverse" sx={{ paddingLeft: "15px" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    style={{ background: "#3371B5", color: "white", width:"151px", height:"35px"}}
                    onClick={()=>props.handleAccordion()}
                  >
                    Place Order
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
