import React from "react";
import Signin from "../components/auth/login";
import { connect } from "react-redux";
import { loginUser } from "../store/actions";

function Login(props) {
  return (
    <div className="wrapper">
      <Signin loginUser={props.loginUser} />
    </div>
  );
}

export default connect(null, { loginUser })(Login);
