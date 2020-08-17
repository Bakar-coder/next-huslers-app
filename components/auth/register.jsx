import React, { useState } from "react";
import { withRouter } from "next/router";
import { Link } from "../../routes";

function Signup(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setError] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const isAlphaNumeric = (username) => {
      const exp = /\W/.test(username);
      return !exp;
    };

    const validEmail = (email) => {
      return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
    };

    const validPassword = (password) => {
      return /^[a-zA-Z0-9]{8,16}$/.test(password);
    };

    if (!isAlphaNumeric(state.username)) {
      setTimeout(() => setError({ ...errors, username: null }), 5000);
      return setError({
        ...errors,
        username: "Username. must alpha-numeric charaters.",
      });
    }

    if (!validEmail(state.email)) {
      setTimeout(() => setError({ ...errors, email: null }), 5000);
      return setError({
        ...errors,
        email: "Invalid email address.",
      });
    }

    if (!validPassword(state.password)) {
      setTimeout(() => setError({ ...errors, password: null }), 5000);
      return setError({
        ...errors,
        password: "Password must be between 8 - 16 characters",
      });
    }

    if (state.password !== state.password2) {
      setTimeout(() => setError({ ...errors, password2: null }), 5000);
      return setError({
        ...errors,
        password2: "Passwords do not match, try again.",
      });
    }

    const user = {
      firstName: state.firstName,
      lastName: state.lastName,
      username: state.username,
      email: state.email,
      password: state.password,
    };

    props.registerUser(user, props.router);
  };

  const { firstName, lastName, username, email, password, password2 } = state;

  return (
    <form onSubmit={handleFormSubmission} className="form">
      <div className="form-header">
        <h2>SIGN UP</h2>
        <p>create a free account.</p>
      </div>
      <div className="row">
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleInputChange}
              required
              placeholder="First Name"
            />
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleInputChange}
              required
              placeholder="Last Name"
            />
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="text"
              className={
                username.length > 0 && errors && errors.username
                  ? "form-control error-input"
                  : "form-control"
              }
              name="username"
              id="username"
              value={username}
              onChange={handleInputChange}
              required
              placeholder="Username"
              minLength="3"
            />
            <label htmlFor="username" className="form-label">
              Username
            </label>
            {username.length > 0 && errors && errors.username && (
              <p className="error">{errors.username}</p>
            )}
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="email"
              className={
                email.length > 0 && errors && errors.email
                  ? "form-control error-input"
                  : "form-control"
              }
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
            {email.length > 0 && errors && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <input
          type="password"
          className={
            (errors && errors.password2) || (errors && errors.password)
              ? "form-control error-input"
              : "form-control"
          }
          name="password"
          id="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
          minLength="8"
          maxLength="25"
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        {errors && errors.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>

      <div className="form-group">
        <input
          type="password"
          className={
            errors && errors.password2
              ? "form-control error-input"
              : "form-control"
          }
          name="password2"
          id="password2"
          value={password2}
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />
        <label htmlFor="password2" className="form-label">
          <span>Confirm Password</span>
        </label>
        {errors && errors.password2 && (
          <p className="error">{errors.password2}</p>
        )}
      </div>

      <div className="form-footer">
        <div className="submit-button">
          <button type="submit" className="button">
            Register
          </button>
        </div>
        <div className="text-sec">
          <p>
            Already Registered? -{" "}
            <Link route="login">
              <a>Login.</a>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default withRouter(Signup);
