import React, { useState, Fragment } from "react";
import { Link } from "../../routes";

function Signin(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.loginUser(state);
  };

  const { email, password } = state;
  const { checked } = remember;
  return (
    <Fragment>
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
                    <img src='/img/logo.svg' alt='logo' />
                    </a>
                  </Link>

                  <div className='sign__group'>
                    <input
                      type='text'
                      className='sign__input'
                      name='email'
                      name='email'
                      value={email}
                      onChange={handleInputChange}
                      placeholder='Email'
                      required
                    />
                  </div>

                  <div className='sign__group'>
                    <input
                      type='password'
                      className='sign__input'
                      name='password'
                      value={password}
                      onChange={handleInputChange}
                      placeholder='Password'
                      required
                    />
                  </div>

                  <div className='sign__group sign__group--checkbox'>
                    <input
                      id='remember'
                      name='remember'
                      type='checkbox'
                      name='remember'
                      value={remember}
                      onClick={() => setRemember(!remember)}
                      defaultChecked
                    />
                    <label htmlFor='remember'>Remember Me</label>
                  </div>

                  <button className='sign__btn' type='submit'>
                    Sign in
                  </button>

                  <span className='sign__text'>
                    Don't have an account?{" "}
                    <Link route='register'>
                      <a>Sign up!</a>
                    </Link>
                  </span>

                  <span className='sign__text'>
                    <a href='#'>Forgot password?</a>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Signin;
