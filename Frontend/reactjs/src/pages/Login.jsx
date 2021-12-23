import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUserSchema } from "../component/Validation";
import userConnect from "../service/RegistrationApi";
import { Link, Redirect } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import RainbowText from "react-rainbow-text";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      redirect: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handleInput = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onSubmit(values, props) {
    let data = {
      email: values.email,
      password: values.password,
    };
    userConnect
      .login(data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.data.firstName[0]);
        this.setState({ redirect: true });
      })
      .catch((e) => {
        alert(`Incorrect credentials`);
        console.log(e);
        props.resetForm();
      });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  paperStyle = {
    padding: 20,
    height: "70%",
    width: 380,
    margin: "40px auto",
  };
  headingStyle = {
    marginBottom: "30px",
    marginTop: "-15px",
  };
  textStyle = {
    marginBottom: "30px",
  };
  buttonStyle = {
    marginLeft: "10px",
    marginTop: "15px",
    marginBottom: "20px",
  };
  linkStyle = {
    marginLeft: "28px",
  };
  checkboxStyle = {
    marginTop: "7px",
    marginLeft: "14px",
  };
  gridStyle = {
    fontFamily: "sans-serif",
  };
  initialValues = {
    email: "",
    password: "",
  };
  render() {
    return (
      <div>
        <Grid>
          <Paper elevation={10} style={this.paperStyle}>
            <Grid style={this.gridStyle}>
              <Grid align="center" style={this.headingStyle}>
                <h2>
                  <RainbowText lightness={0.5} saturation={1}>
                    BookStore
                  </RainbowText>
                </h2>
                <h2>Sign In</h2>
              </Grid>
              <Grid>
                <Formik
                  initialValues={this.initialValues}
                  validationSchema={loginUserSchema}
                  onSubmit={this.onSubmit}
                >
                  {(props) => (
                    <Form>
                      <Grid align="center">
                        <Grid style={this.textStyle}>
                          <Field
                            as={TextField}
                            label="Email"
                            variant="outlined"
                            name="email"
                            style={{ width: 330 }}
                            error={props.errors.email && props.touched.email}
                            helperText={<ErrorMessage name="email" />}
                            autoFocus
                          />
                        </Grid>
                        <Field
                          as={TextField}
                          name="password"
                          type={this.state.hidden ? "password" : "text"}
                          label="Password"
                          variant="outlined"
                          style={{ width: 330 }}
                          error={
                            props.errors.password && props.touched.password
                          }
                          helperText={<ErrorMessage name="password" />}
                        />
                      </Grid>
                      <Grid container align="left">
                        <Grid item xs={7}>
                          <item>
                            <FormControlLabel
                              style={this.checkboxStyle}
                              control={
                                <Checkbox
                                  onClick={this.toggleShow}
                                  name="checked"
                                  color="primary"
                                />
                              }
                              label="Show password"
                            />
                          </item>
                        </Grid>
                        <Grid item xs={4} style={this.linkStyle}>
                          <item>
                            <h5>
                              <Link to="/forgotPassword">Forgot password?</Link>
                            </h5>
                          </item>
                        </Grid>
                      </Grid>
                      <Grid container spacing={10} align="left">
                        <Grid item xs={6} style={this.linkStyle}>
                          <item>
                            <h4>
                              <Link to="/createAccount">Create Account</Link>
                            </h4>
                          </item>
                        </Grid>
                        <Grid item xs={5} style={this.buttonStyle}>
                          <item>
                            <Button
                              id="submit"
                              type="submit"
                              value="Submit"
                              color="primary"
                              variant="contained"
                            >
                              Sign In
                            </Button>
                          </item>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {this.state.redirect ? <Redirect to="/bookstore" /> : null}
      </div>
    );
  }
}
export default Login;
