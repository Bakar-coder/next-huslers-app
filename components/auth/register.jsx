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

  const [remember, setRemember] = useState(false);

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
  const { checked } = remember;

  return (
    <div
      className='sign section--bg'
      data-bg='/img/section/section.jpg'
      style={{
        background:
          "url(/img/section/section.jpg) center center / cover no-repeat",
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='sign__content'>
              <form onSubmit={handleFormSubmission} className='sign__form'>
                <Link route='/' >
                  <a className='sign__logo'>
                  <img src='/img/logo.svg' alt='' />
                  </a>
                </Link>

                <div className='sign__group'>
                  <input
                    type='text'
                    className='sign__input'
                    placeholder='First Name'
                    name='firstName'
                    id='firstName'
                    value={firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='sign__group'>
                  <input
                    type='text'
                    className='sign__input'
                    placeholder='Last Name'
                    name='lastName'
                    id='lastName'
                    value={lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='sign__group'>
                  <input
                    type='text'
                    className={
                      username.length > 0 && errors && errors.username
                        ? "sign__input error-input"
                        : "sign__input"
                    }
                    placeholder='Username'
                    name='username'
                    id='username'
                    value={username}
                    onChange={handleInputChange}
                    required
                  />
                  {username.length > 0 && errors && errors.username && (
                    <p className='error'>{errors.username}</p>
                  )}
                </div>

                <div className='sign__group'>
                  <input
                    type='email'
                    className={
                      email.length > 0 && errors && errors.email
                        ? "sign__input error-input"
                        : "sign__input"
                    }
                    placeholder='Email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                  {email.length > 0 && errors && errors.email && (
                    <p className='error'>{errors.email}</p>
                  )}
                </div>

                <div className='sign__group'>
                  <input
                    type='password'
                    className={
                      (errors && errors.password2) ||
                      (errors && errors.password)
                        ? "sign__input error-input"
                        : "sign__input"
                    }
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                    placeholder='Password'
                    minLength='8'
                    maxLength='25'
                  />
                  {errors && errors.password && (
                    <p className='error'>{errors.password}</p>
                  )}
                </div>

                <div className='sign__group'>
                  <input
                    type='password'
                    className={
                      errors && errors.password2
                        ? "sign__input error-input"
                        : "sign__input"
                    }
                    placeholder='Password'
                    name='password2'
                    value={password2}
                    onChange={handleInputChange}
                    placeholder='Confirm Password'
                  />
                  {errors && errors.password2 && (
                    <p className='error'>{errors.password2}</p>
                  )}
                </div>

                <div className='sign__group sign__group--checkbox'>
                  <input
                    id='remember'
                    name='remember'
                    type='checkbox'
                    onClick={() => setRemember(!remember)}
                    defaultChecked
                    required
                  />
                  <label htmlFor='remember'>
                    I agree to the <a href='privacy.html'>Privacy Policy</a>
                  </label>
                </div>

                <button className='sign__btn' type='submit'>
                  Sign up
                </button>

                <span className='sign__text'>
                  Already have an account?{" "}
                  <Link route='login'>
                    <a>Sign in!</a>
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Signup);
