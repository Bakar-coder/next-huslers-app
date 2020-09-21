import React, { Fragment } from "react";
import { Link } from "../../routes";
import { withRouter } from "next/router";
import "./nav.scss";

const Nav = (props) => {
  const [state, setState] = React.useState({ isOpen: false, navOpen: false });
  const [search, setSearch] = React.useState({ term: '' })
  const { isOpen, navOpen } = state;
  const {searchItem} = props;

  const handleToggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const handleNavToggle = () => {
    setState({ ...state, navOpen: !state.navOpen });
  };

  const handleSearch = (e) => setSearch({...search, term: e.target.value})
  const handleSearchSubmit = e => {
    if (search.term) {
      searchItem(search.term, props.history)
    }
  }
  
  const { term } = search
  return (
    <Fragment>
      <header className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='header__content'>
                <Link route='/'>
                  <a className='header__logo'>
                    <img src='/img/logo.svg' alt='' />
                  </a>
                </Link>

                <ul
                  className={
                    navOpen ? "header__nav header__nav--active" : "header__nav"
                  }
                >
                  <li className='header__nav-item'>
                    <Link route='/'>
                      <a className='header__nav-link'>Home</a>
                    </Link>
                  </li>

                  <li className='header__nav-item'>
                    <Link route='products'>
                      <a className='header__nav-link'>Shop</a>
                    </Link>
                  </li>

                  {props.user && props.user.stuff && (
                    <li className='header__nav-item'>
                      <Link route='admin'>
                        <a className='header__nav-link'>admin</a>
                      </Link>
                    </li>
                  )}

                  <li className='header__nav-item'>
                    <Link route='cart'>
                      <a className='header__nav-link'>
                        Cart{" "}
                        {props.cart && props.cart.length > 0 && (
                          <span className='badge badge-warning'>
                            {props.cart.length}
                          </span>
                        )}
                      </a>
                    </Link>
                  </li>

                  <li className='header__nav-item'>
                    <Link route='events'>
                      <a className='header__nav-link'>
                      Events{" "}
                      </a>
                    </Link>
                  </li>

                  <li
                    className='dropdown header__nav-item'
                    onClick={handleToggle}
                  >
                    <a
                      className='dropdown-toggle header__nav-link header__nav-link--more'
                      role='button'
                      id='dropdownMenuMore'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='icon ion-ios-more'></i>
                    </a>

                    <ul
                      className={
                        isOpen
                          ? "dropdown-menu header__dropdown-menu show"
                          : "dropdown-menu header__dropdown-menu"
                      }
                      aria-labelledby='dropdownMenuMore'
                    >
                     
                     
                      {props.user && props.user.member && (
                        <li onClick={handleToggle}>
                          <Link route='media'>
                            <a>Add Media</a>
                          </Link>
                        </li>
                      )}
                      {props.user && props.user.stuff && (
                        <li onClick={handleToggle}>
                          <Link route='add-promotion'>
                            <a>Add Promotion</a>
                          </Link>
                        </li>
                      )}
                      {props.user && props.user.stuff && (
                        <li onClick={handleToggle}>
                          <Link route='add-event'>
                            <a>Add Event</a>
                          </Link>
                        </li>
                      )}
                     

                      <li onClick={handleToggle}>
                        <Link route='gallery'>
                          <a>Gallery</a>
                        </Link>
                      </li>

                      {props.user && (
                        <li onClick={handleToggle}>
                          <Link route='orders'>
                            <a>Orders</a>
                          </Link>
                        </li>
                      )}

                      <li onClick={handleToggle}>
                        <Link route='contact'>
                          <a>Contacts</a>
                        </Link>
                      </li>

                      {props.user === null && (
                        <li onClick={handleToggle}>
                          <Link route='login'>
                            <a>Sign In</a>
                          </Link>
                        </li>
                      )}

                      {props.user === null && (
                        <li onClick={handleToggle}>
                          <Link route='register'>
                            <a>Sign Up</a>
                          </Link>
                        </li>
                      )}
                      {props.user && (
                        <li onClick={handleToggle}>
                          <Link route='#'>
                            <a onClick={props.logoutUser}>Sign Out</a>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </li>
                </ul>

                <div className='header__auth'>
                  <form action='#' className='header__search'>
                    <input
                      className='header__search-input'
                      type='text'
                      placeholder='Search...'
                      value={term}
                      onChange={handleSearch}
                    />
                    <button className='header__search-button' onClick={handleSearchSubmit} type='button'>
                      <i className='icon ion-ios-search'></i>
                    </button>
                    <button className='header__search-close' type='button'>
                      <i className='icon ion-md-close'></i>
                    </button>
                  </form>

                  <button className='header__search-btn' type='button'>
                    <i className='icon ion-ios-search'></i>
                  </button>

                  <div className='dropdown header__lang'>
                    <a
                      className='dropdown-toggle header__nav-link'
                      href='#'
                      role='button'
                      id='dropdownMenuLang'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      EN
                    </a>

                    <ul
                      className='dropdown-menu header__dropdown-menu'
                      aria-labelledby='dropdownMenuLang'
                    >
                      <li>
                        <a href='#'>English</a>
                      </li>
                      <li>
                        <a href='#'>Spanish</a>
                      </li>
                      <li>
                        <a href='#'>Russian</a>
                      </li>
                    </ul>
                  </div>

                  {props.user ? (
                    <Link route='#'>
                      <a className='header__sign-in' onClick={props.logoutUser}>
                        <i className='icon ion-ios-log-in'></i>
                        <span>sign Out</span>
                      </a>
                    </Link>
                  ) : (
                    <Link route='login'>
                      <a className='header__sign-in'>
                        <i className='icon ion-ios-log-in'></i>
                        <span>sign in</span>
                      </a>
                    </Link>
                  )}
                </div>

                <button
                  className={
                    navOpen ? "header__btn header__btn--active" : "header__btn"
                  }
                  type='button'
                  onClick={handleNavToggle}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {navOpen && (
        <div
          className={navOpen ? "back-drop back-drop-open" : "back-drop"}
          onClick={handleNavToggle}
        />
      )}
    </Fragment>
  );
};

export default withRouter(Nav);
