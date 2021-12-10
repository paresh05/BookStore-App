import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Appbar from "../component/AppBar";
import userConnect from "../service/booksApi";
import { fetchAllBooks } from "../actions/bookAction";
import { useDispatch } from "react-redux";
import Books from "../component/Books";

export default function Dashboard() {
  const [option, setOption] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOption = () => {
    setOption(false);
  };

  const handleNoteOption = () => {
    setOption(true);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    userConnect
      .getBooks()
      .then((response) => {

        dispatch(fetchAllBooks(response.data))
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar />
      <Books/>
    </Box>
  );
}
