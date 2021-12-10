import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

export default function Books() {
  const books = useSelector((state) => state.allBooks.books);

  return (
    <Grid
      container
      spacing={4}
      style={{ paddingTop: 100, paddingLeft: "150px" }}
    >
      {books.map((book, index) => (
        <Grid item align="left">
          <Card
            variant="outlined"
            sx={{
              //bgcolor: note.color,
              width: "235px",
              height: "315px",
            }}
            key={index}
          >
            <CardMedia
              component="img"
              alt="images"
              height="171px"
              image={book.image}
            />
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
                  fontSize: "12px",
                  lineHeight: "15px",
                  letterSpacing: "0px",
                  color: "#0A0102",
                  opacity: 1,
                }}
              >
                Rs.{book.price}
              </Typography>
            </CardContent>
            <Stack spacing={2} direction="row" sx={{paddingLeft:"15px"}}>
              <Button
                variant="contained"
                type="submit"
                size="small"
                style={{ background: "#A03037" ,color: "white"}}
              >
                Add to bag
              </Button>
              <Button variant="outlined" type="submit" size="small">
                Wishlist
              </Button>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
