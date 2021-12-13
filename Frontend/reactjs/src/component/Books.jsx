import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import userConnect from "../service/cartApi";
import booksApi from "../service/booksApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, fetchAllBooks } from "../actions/bookAction";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
export default function Books() {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState(null);
  const books = useSelector((state) => state.allBooks.books);
  const handleCart = (book) => {
    let data = {
      bookId: book._id,
      price: book.price,
      title: book.title,
      image: book.image,
      author: book.author,
    };
    console.log(data);
    userConnect
      .addToCart(data)
      .then(() => {
        dispatch(addCart(data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleSortChange = (event) => {
    setSort(event.target.value);
    if (event.target.value == 1) {
      books.sort((a, b) => a.price - b.price);
    } else if (event.target.value == 2) {
      books.sort((a, b) => b.price - a.price);
    }
  };
  const handlePage = (page) => {
    booksApi
      .getBooks(page)
      .then((response) => {
        dispatch(fetchAllBooks(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Grid
      container
      spacing={4}
      style={{ paddingTop: 100, paddingLeft: "150px" }}
    >
      <Grid item xs={11} align="right">
        <Box sx={{ maxWidth: 180 }}>
          <FormControl fullWidth>
            <InputLabel id="sort">Sort by relevance</InputLabel>
            <Select
              labelId="sort"
              id="sort by relevance"
              value={sort}
              label="Sort by relevance"
              onChange={handleSortChange}
            >
              <MenuItem value={1}>Price:Low to High</MenuItem>
              <MenuItem value={2}>Price:High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
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
            <Stack spacing={2} direction="row" sx={{ paddingLeft: "15px" }}>
              <Button
                variant="contained"
                type="submit"
                size="small"
                style={{ background: "#A03037", color: "white" }}
                onClick={() => handleCart(book)}
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
      <Grid item xs={12}>
        <Pagination
          count={5}
          onChange={(event, page) => {
            handlePage(page);
          }}
          color="primary"
          shape="rounded"
          sx={{ pl: 48, pb: 3 }}
        />
      </Grid>
    </Grid>
  );
}
