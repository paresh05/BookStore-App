import React from "react";
import Login from "../pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CreateUser } from "../pages/CreateUser";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/Reset";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Router>
      <Route path="/createAccount" exact component={CreateUser} />
      <Route path="/" exact component={Login} />
      <Route path="/forgotPassword" exact component={ForgotPassword} />
      <Route path="/reset/:token" exact component={ResetPassword} />
      <Route path="/bookstore" exact component={Dashboard} />
    </Router>
  );
};
export default  Routes ;
