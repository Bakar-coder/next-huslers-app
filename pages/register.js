import React from "react";
import Signup from "../components/auth/register";
import { connect } from "react-redux";
import { registerUser } from "../store/actions";

function Register(props) {
  return (
    <div className="wrapper">
      <Signup registerUser={props.registerUser} />
    </div>
  );
}

export default connect(null, { registerUser })(Register);
