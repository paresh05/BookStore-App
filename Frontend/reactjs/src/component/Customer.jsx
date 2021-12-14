import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import cartApi from "../service/cartApi";
import { Button, Grid, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function CartItems(props) {
  let initialNote = {
    name: "",
    phoneNumber: "",
    pinCode: "",
    locality: "",
    address: "",
    city: "",
    landmark: "",
    type: "",
  };
  const [details, setDetails] = useState(initialNote);
  const [post, setPost] = useState(false);

  useEffect(() => {
    fetchCustomer();
  }, []);
  const fetchCustomer = () => {
    cartApi
      .getCustomer()
      .then((response) => {
        if (response.data == "") {
          setPost(true);
        } else {
          setDetails(response.data[0]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleChange = (event) => {
    let { name, value } = event.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleContinue = () => {
    if (post) {
      console.log(details);
      cartApi
        .addCustomer(details)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log(details);
      cartApi
        .updateCustomer(details)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    props.handleClose()
  };
  return (
    <Grid
      container
      spacing={4}
      style={{ paddingTop: 65, paddingLeft: "210px" }}
    >
        <Accordion
          expanded={props.expanded == true}
          sx={{width:"774px"}}
          square
          variant="outlined"
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography  variant="h6" style={{ width: "33%", flexShrink: 0, color: "#333232", }}>
              Customer Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              columnSpacing={10}
              rowSpacing={2}
              style={{ paddingLeft: "36px", paddingTop: "16px" }}
            >
              <Grid item xs={4}>
                <TextField
                  name="name"
                  value={details.name}
                  type="text"
                  label="Name"
                  variant="outlined"
                  sx={{ width: "251px" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} align="left">
                <TextField
                  name="phoneNumber"
                  value={details.phoneNumber}
                  type="text"
                  label="Phone Number"
                  variant="outlined"
                  sx={{ width: "251px" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="pinCode"
                  value={details.pinCode}
                  label="Pin Code"
                  type="text"
                  variant="outlined"
                  sx={{ width: "251px" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} align="left">
                <TextField
                  name="locality"
                  value={details.locality}
                  label="Locality"
                  type="text"
                  variant="outlined"
                  sx={{ width: "251px" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={10} align="left">
                <TextField
                  name="address"
                  label="Address"
                  value={details.address}
                  type="text"
                  multiline
                  rows={3}
                  variant="outlined"
                  sx={{ width: "512px" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="city"
                  value={details.city}
                  label="City/Town"
                  variant="outlined"
                  sx={{ width: "251px" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6} align="left">
                <TextField
                  name="landmark"
                  value={details.landmark}
                  label="Landmark"
                  variant="outlined"
                  sx={{ width: "251px" }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={8} align="left">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Type</FormLabel>
                  <RadioGroup row aria-label="type" name="type" spacing={1}>
                    <FormControlLabel
                      value="home"
                      control={<Radio />}
                      label="Home"
                      onChange={handleChange}
                    />
                    <FormControlLabel
                      value="work"
                      control={<Radio />}
                      label="Work"
                      onChange={handleChange}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                      onChange={handleChange}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ marginLeft: "30px", paddingTop: "50px" }}
              >
                <Button
                  type="submit"
                  value="Submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
    </Grid>
  );
}
