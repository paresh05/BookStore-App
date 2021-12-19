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
      cartApi
        .addCustomer(details)
        .then((response) => {
          console.log(response.data);
          props.handleId(response.data._id);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      cartApi
        .updateCustomer(details)
        .then((response) => {
          console.log(response);
          props.handleId(response.data._id);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    props.handleClose();
  };
  return (
    <Grid style={{ paddingTop: 20, paddingLeft: "12%" }}>
      <Accordion
        expanded={props.expanded == true}
        sx={{ maxWidth: "774px", width: "90%" }}
        square
        variant="outlined"
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography
            id="customerTitle"
            variant="h6"
            style={{ color: "#333232" }}
          >
            Customer Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            rowSpacing={2}
            style={{ paddingLeft: "5%", paddingTop: "16px" }}
          >
            <Grid item xs={12} container columnSpacing={2} rowSpacing={2}>
              <Grid item>
                <TextField
                  name="name"
                  value={details.name}
                  type="text"
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item align="left">
                <TextField
                  name="phoneNumber"
                  value={details.phoneNumber}
                  type="text"
                  label="Phone Number"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container columnSpacing={2} rowSpacing={2}>
              <Grid item>
                <TextField
                  name="pinCode"
                  value={details.pinCode}
                  label="Pin Code"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item align="left">
                <TextField
                  name="locality"
                  value={details.locality}
                  label="Locality"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container columnSpacing={2} rowSpacing={2}>
              <Grid item xs={12} align="left">
                <TextField
                  name="address"
                  label="Address"
                  value={details.address}
                  type="text"
                  multiline
                  fullWidth
                  rows={3}
                  variant="outlined"
                  style={{maxWidth:"462px"}}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container columnSpacing={2} rowSpacing={2}>
              <Grid item align="left">
                <TextField
                  name="city"
                  value={details.city}
                  label="City/Town"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item align="left">
                <TextField
                  name="landmark"
                  value={details.landmark}
                  label="Landmark"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} align="left">
              <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup row aria-label="type" name="type" spacing={1} defaultValue="Home">
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
              xs={12}
              align="right"
            >
              <Button
                type="submit"
                value="Submit"
                variant="contained"
                fullWidth
                style={{maxWidth:"160px",backgroundColor:"#3371B5", color:"white"}}
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
