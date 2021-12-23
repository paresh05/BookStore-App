import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import booksApi from "../service/booksApi";
import Popover from "@mui/material/Popover";
import "../styles/books.scss";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { AppBar, Stack } from "@mui/material";
import { Redirect } from "react-router-dom";
import { fetchFilteredBooks } from "../actions/bookAction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(255, 255, 255)",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    height: "40px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "grey",
  padding: theme.spacing(0, "3%"),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Appbar() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [input, setInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const myBooks = useSelector((state) => state.allBooks.books);

  useEffect(() => {
    dispatch(fetchFilteredBooks(myBooks));
  }, [myBooks]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSearch = (event) => {
    setInput(event.target.value);
    if (event.target.value.length > 3) {
      booksApi
        .searchBook({ search: event.target.value })
        .then((response) => {
          console.log(response);
          dispatch(fetchFilteredBooks(response.data));
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      dispatch(fetchFilteredBooks(myBooks));
    }
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        variant="outlined"
        sx={{ bgcolor: "rgba(160, 48, 55, 1)" }}
      >
        <Toolbar sx={{ ml: "9%" }}>
          <MenuBookIcon />
          <Typography
            id="title"
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft: "5px" }}
          >
            BookStore
          </Typography>
          <Search id="searchBox" style={{ width: "50%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBase
              id="searchBase"
              sx={{
                pt:"4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              placeholder="Search..."
              value={input}
              onChange={(event) => {
                handleSearch(event);
              }}
            />
          </Search>
          <Box>
            <Stack
              id="cart"
              spacing={1}
              direction={"row"}
              sx={{ marginLeft: "75%" }}
            >
              <Typography id="cartTitle" sx={{ paddingTop: 2 }}>
                Cart
              </Typography>
              <IconButton
                id="cartButton"
                size="large"
                color="inherit"
                onClick={() => {
                  setRedirect(true);
                }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Stack>
            <Popover
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Button>Logout</Button>
            </Popover>
          </Box>
        </Toolbar>
      </AppBar>
      {redirect ? <Redirect to="/bookstore/cart" /> : null}
    </Box>
  );
}
