import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import userConnect from "../service/RegistrationApi";
import RainbowText from "react-rainbow-text";
import { createUserSchema } from "../component/Validation";
import logo from "../assets/Logo.PNG";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/createUser.scss";
export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      redirect: false,
    };
  }
  onSubmit = (values, props) => {
    let data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    userConnect
      .register(data)
      .then((response) => {
        alert(
          `${values.firstName} ${values.lastName}  Registered Successfully !!!!`
        );
        console.log(response.data);
        this.setState({ redirect: true });
      })
      .catch((e) => {
        alert(` Registration Failed !!!!`);
        console.log(e);
      });
    props.resetForm();
  };
  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  gridStyle = {
    marginLeft: "30px ",
    fontFamily: "sans-serif",
  };
  textStyle = {
    marginTop: "40px",
    marginBottom: "30px",
    width: "80%",
  };
  buttonStyle = {
    marginLeft: "70%",
    marginTop: "10px",
  };
  imageStyle = {
    marginTop: "130px",
  };
  helpexTextStyle = {
    marginLeft: "20px",
    marginBottom: "10px",
  };
  initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  render() {
    return (
      <div>
        <Grid align="left">
          <Paper elevation={10} className="paperStyle">
            <Grid container>
              <Grid item container xs={8} style={this.gridStyle} spacing={1}>
                <Grid item xs={12}>
                  <h1>
                    <RainbowText lightness={0.5} saturation={1}>
                      BookStore
                    </RainbowText>
                  </h1>
                  <h4>Create A New Account</h4>
                </Grid>
                <Grid item xs={12}>
                  <Formik
                    initialValues={this.initialValues}
                    validationSchema={createUserSchema}
                    onSubmit={this.onSubmit}
                  >
                    {(props) => (
                      <Form>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <Field
                              as={TextField}
                              name="firstName"
                              type="text"
                              label="First Name"
                              variant="outlined"
                              size="small"
                              error={
                                props.errors.firstName &&
                                props.touched.firstName
                              }
                              helperText={<ErrorMessage name="firstName" />}
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              as={TextField}
                              name="lastName"
                              type="text"
                              label="Last Name"
                              variant="outlined"
                              size="small"
                              error={
                                props.errors.lastName && props.touched.lastName
                              }
                              helperText={<ErrorMessage name="lastName" />}
                            />
                          </Grid>
                        </Grid>
                        <Grid style={this.textStyle} item xs={12}>
                          <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            variant="outlined"
                            size="small"
                            style={{ width: "120%" }}
                            error={props.errors.email && props.touched.email}
                            helperText={<ErrorMessage name="email" />}
                          />
                          <FormHelperText style={this.helpexTextStyle}>
                            You can use letters, numbers
                          </FormHelperText>
                        </Grid>
                        <Grid container spacing={0}>
                          <Grid item xs={6}>
                            <Field
                              as={TextField}
                              name="password"
                              type={this.state.hidden ? "password" : "text"}
                              label="Password"
                              variant="outlined"
                              size="small"
                              error={
                                props.errors.password && props.touched.password
                              }
                              helperText={<ErrorMessage name="password" />}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              as={TextField}
                              name="confirmPassword"
                              type={this.state.hidden ? "password" : "text"}
                              label="Confirm"
                              variant="outlined"
                              size="small"
                              error={
                                props.errors.confirmPassword &&
                                props.touched.confirmPassword
                              }
                              helperText={
                                <ErrorMessage name="confirmPassword" />
                              }
                            />
                          </Grid>
                          <FormHelperText style={this.helpexTextStyle}>
                            Use 8 or more characters with a mix of letters,
                            numbers & symbols
                          </FormHelperText>
                        </Grid>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onClick={this.toggleShow}
                              name="checked"
                              color="primary"
                            />
                          }
                          label="Show password"
                        />
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <h4>
                              <Link to="/" style={this.textStyle}>
                                Sign in instead
                              </Link>
                            </h4>
                          </Grid>
                          <Grid item xs={6}>
                            <Button
                              id="submit"
                              type="submit"
                              value="Submit"
                              color="primary"
                              variant="contained"
                              style={this.buttonStyle}
                            >
                              Next
                            </Button>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </Grid>
              </Grid>
              <Grid item xs={3} style={this.imageStyle}>
                <img src={logo} alt="Loading" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {this.state.redirect ? <Redirect to="/" /> : null}
      </div>
    );
  }
}
