import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import booksApi from "../service/booksApi";
import Popover from "@mui/material/Popover";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button } from "@material-ui/core";
import { Stack } from "@mui/material";
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
    width: "50%",
    height: "40px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "grey",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "500px",
  },
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: "white",
  color: "white",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
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
        .searchBook({search:event.target.value})
        .then((response) => {
          console.log(response);
          dispatch(fetchFilteredBooks(response.data));
        })
        .catch((e) => {
          console.log(e);
        });
    }else {
      dispatch(fetchFilteredBooks(myBooks));
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        variant="outlined"
        sx={{ bgcolor: "rgba(160, 48, 55, 1)" }}
      >
        <Toolbar sx={{ ml: "161px" }}>
          <MenuBookIcon />
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft: "5px" }}
          >
            BookStore
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              value={input}
              onChange={(event) => {
                handleSearch(event);
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack spacing={1} direction="row" sx={{ marginRight: "80px" }}>
              <Typography sx={{ paddingTop: 2 }}>Cart</Typography>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => {
                  setRedirect(true);
                }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Stack>
            <Avatar
              style={{
                background: "black",
                width: 30,
                height: 30,
                marginTop: "8px",
              }}
              onClick={handleClick}
            >
              P
            </Avatar>
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
