import React from "react";
import Signin from "../components/auth/login";
import { connect } from "react-redux";
import { loginUser } from "../store/actions";

function Login(props) {
  return <Signin loginUser={props.loginUser} />;
}

export default connect(null, { loginUser })(Login);
