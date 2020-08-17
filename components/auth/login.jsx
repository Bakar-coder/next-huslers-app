import React, { useState } from "react";
import { Link } from "../../routes";

function Signin(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.loginUser(state);
  };

  const { email, password } = state;
  return (
    <form onSubmit={handleFormSubmission} className="form">
      <div className="form-header">
        <h2>SIGN IN</h2>
        <p>Welcome back, Login to your account to continue.</p>
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          required
          placeholder="Email"
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          value={password}
          onChange={handleInputChange}
          required
          placeholder="Password"
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
      </div>

      <div className="form-footer">
        <button type="submit" className="button">
          Login
        </button>
        <div>
          <p>
            Forgot Password? -{" "}
            <Link route="reset">
              <a>Reset.</a>
            </Link>
          </p>
          <p>
            Not Registered? -{" "}
            <Link route="register">
              <a>Register.</a>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signin;
