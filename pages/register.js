import React from "react";
import Signup from "../components/auth/register";
import { connect } from "react-redux";
import { registerUser } from "../store/actions";

function Register(props) {
  return <Signup registerUser={props.registerUser} />;
}

export default connect(null, { registerUser })(Register);
