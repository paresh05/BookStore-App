import React, { useState } from "react";
import userConnect from "../service/RegistrationApi";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import RainbowText from "react-rainbow-text";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onSubmit = () => {
    console.log(email);
    let data = {
      email: email,
    };
    userConnect
      .forgotPassword(data)
      .then((response) => {
        alert(
          `Link to Reset your password has been sent to your Email Successfully !!!!`
        );
        console.log(response.data);
      })
      .catch((e) => {
        alert(`Can not send Email to reset the password`);
        console.log(e);
      });
  };
  const paperStyle = {
    padding: 20,
    height: "70%",
    width: 380,
    margin: "40px auto",
  };
  const headingStyle = {
    marginBottom: "30px",
    marginTop: "-15px",
  };
  const textStyle = {
    marginBottom: "30px",
  };
  const buttonStyle = {
    marginLeft: "10px",
    marginTop: "15px",
    marginBottom: "20px",
  };
  const gridStyle = {
    fontFamily: "sans-serif",
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid style={gridStyle}>
            <Grid align="center" style={headingStyle}>
              <h2>
                <RainbowText lightness={0.5} saturation={1}>
                  FundooNotes
                </RainbowText>
              </h2>
              <h4>Forgot Password</h4>
            </Grid>
            <Grid>
              <Grid align="center">
                <Grid style={textStyle}>
                  <TextField
                    id="email"
                    type="email"
                    label="Email"
                    value={email}
                    variant="outlined"
                    style={{ width: 330 }}
                    onChange={(e) => setEmail(e.target.value)}
                    helperText="Enter Your Email ID"
                    autoFocus
                    required
                  />
                </Grid>
              </Grid>
              <Grid item xs={11} style={buttonStyle} align="right">
                <item>
                  <Button
                    type="submit"
                    value="Submit"
                    color="primary"
                    variant="contained"
                    onClick={onSubmit}
                  >
                    next
                  </Button>
                </item>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
export default ForgotPassword;
