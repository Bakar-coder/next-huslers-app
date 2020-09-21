import React from "react";
import { Link } from "../../../routes";

const Slidebar = ({ user }) => {
  const { firstName, lastName } = user
  const [state, setState] = React.useState({ isOpen: false, navOpen: false });
  const { isOpen, navOpen } = state;

  const handleToggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='sidebar'>
      <a href='index.html' className='sidebar__logo'>
        <img src='/assets/img/logo.svg' alt='' />
       
      </a>

      <div className='sidebar__user'>
        <div className='sidebar__user-img'>
          <img src='/assets/img/user.svg' alt='' />
        </div>

        <div className='sidebar__user-title'>
          <span>Admin</span>
  <p>{firstName} {lastName}</p>
        </div>

        <button className='sidebar__user-btn' type='button'>
          <i className='icon ion-ios-log-out'></i>
        </button>
      </div>

      <ul className='sidebar__nav'>
        <li className='sidebar__nav-item'>
          <a
            href='index.html'
            className='sidebar__nav-link sidebar__nav-link--active'
          >
            <i className='icon ion-ios-keypad'></i> Dashboard
          </a>
        </li>

        <li className='sidebar__nav-item'>
          <a href='catalog.html' className='sidebar__nav-link'>
            <i className='icon ion-ios-film'></i> Media
          </a>
        </li>

        <li className='sidebar__nav-item'>
          <a href='users.html' className='sidebar__nav-link'>
            <i className='icon ion-ios-contacts'></i> Users
          </a>
        </li>

        <li className='sidebar__nav-item'>
          <a href='comments.html' className='sidebar__nav-link'>
            <i className='icon ion-ios-chatbubbles'></i> Products
          </a>
        </li>

        <li className='sidebar__nav-item'>
          <a href='reviews.html' className='sidebar__nav-link'>
            <i className='icon ion-ios-star-half'></i> Reviews
          </a>
        </li>

        <li className='dropdown sidebar__nav-item'>
          <a
            className='dropdown-toggle sidebar__nav-link'
            href='#'
            role='button'
            id='dropdownMenuMore'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            onClick={handleToggle}
          >
            <i className='icon ion-ios-copy'></i> Pages
          </a>

          <ul
            className={
              isOpen
                ? "dropdown-menu sidebar__dropdown-menu scrollbar-dropdown mCustomScrollbar _mCS_1 show"
                : "dropdown-menu sidebar__dropdown-menu scrollbar-dropdown mCustomScrollbar _mCS_1"
            }
            aria-labelledby='dropdownMenuMore'
            style={{ overflow: "visible" }}
          >
            <div
              id='mCSB_1'
              className='mCustomScrollBox mCS-custom-bar mCSB_vertical mCSB_outside'
              style={{ maxHeight: "160px" }}
              tabindex='0'
            >
              <div
                id='mCSB_1_container'
                className='mCSB_container'
                style={{ position: "relative", top: "0", left: "0" }}
                dir='ltr'
              >
                <li>
                  <Link route='admin-products'>
                    <a>Products</a>
                  </Link>
                </li>
                <li>
                  <Link route='admin-add-product'>
                    <a>Add Product</a>
                  </Link>
                </li>
                <li>
                  <Link route='admin-add-photo'>
                    <a>Add Gallery Photo</a>
                  </Link>
                </li>
              </div>
            </div>
            <div
              id='mCSB_1_scrollbar_vertical'
              className='mCSB_scrollTools mCSB_1_scrollbar mCS-custom-bar mCSB_scrollTools_vertical'
              style={{ display: "block" }}
            >
              <div className='mCSB_draggerContainer'>
                <div
                  id='mCSB_1_dragger_vertical'
                  className='mCSB_dragger'
                  style={{
                    position: "absolute",
                    minHeight: "30px",
                    display: "block",
                    height: "107px",
                    maxHeight: "150px",
                    top: "0px",
                  }}
                >
                  <div
                    className='mCSB_dragger_bar'
                    style={{ lineHeight: "30px" }}
                  ></div>
                  <div className='mCSB_draggerRail'></div>
                </div>
              </div>
            </div>
          </ul>
        </li>
      </ul>

      <div className='sidebar__copyright'>
        © {year} GHETTO HUSTLERS <br />
        ENTERTAINMENT
      </div>
    </div>
  );
};

export default Slidebar;
