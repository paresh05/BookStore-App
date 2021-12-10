import React, { useState } from "react";
import userConnect from "../service/RegistrationApi";
import {
  Grid,
  Paper,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import RainbowText from "react-rainbow-text";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const {token} = useParams();
  const toggleShow = () => {
    setHidden(!hidden);
  };
  const onSubmit = () => {
    let data = {
      password: password,
    };
    userConnect
      .resetPassword(data,token)
      .then(() => {
        alert(
          `Password Reset Successfully!!`
        );
      })
      .catch((e) => {
        alert(`Failed to Reset the Password`);
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
  const checkboxStyle = {
    marginLeft: "14px",
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
              <h4>Reset Password</h4>
            </Grid>
            <Grid>
              <Grid align="center">
                <Grid style={textStyle}>
                  <TextField
                    id="password"
                    type={hidden ? "password" : "text"}
                    label="Password"
                    variant="outlined"
                    style={{ width: 330 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                style={checkboxStyle}
                control={
                  <Checkbox
                    onClick={toggleShow}
                    name="checked"
                    color="primary"
                  />
                }
                label="Show password"
              />
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
export default ResetPassword;
