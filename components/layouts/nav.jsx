import React, { Fragment } from "react";
import { Link } from "../../routes";
import { withRouter } from "next/router";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./nav.scss";
import SideNav from "./sideNav";

const Nav = (props) => {
  const [state, setState] = React.useState({ isOpen: false });
  const { isOpen } = state;

  const handleNavToggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  return (
    <Fragment>
      <nav className="navbar py-4">
        <div className="navbar-content">
          <Link route="/">
            <a>
              <h3>GHETTO HUSTLERS ENT</h3>
            </a>
          </Link>
          {!isOpen && (
            <IoMdMenu className="menu" onClick={() => handleNavToggle()} />
          )}
          {isOpen && (
            <IoMdClose className="menu" onClick={() => handleNavToggle()} />
          )}

          <ul>
            <li>
              <Link route="/">
                <a>Home</a>
              </Link>
            </li>
            {props.user && props.user["stuff"] && (
              <li>
                <Link route="/admin-products">
                  <a>Admin-Products</a>
                </Link>
              </li>
            )}
            {props.user && props.user["stuff"] && (
              <li>
                <Link route="admin-add-product">
                  <a>Add-Product</a>
                </Link>
              </li>
            )}

            <li>
              <Link route="about">
                <a>Gallery</a>
              </Link>
            </li>

            <li>
              <Link route="about">
                <a>Events</a>
              </Link>
            </li>

            <li>
              <Link route="about">
                <a>Services</a>
              </Link>
            </li>

            <li>
              <Link route="about">
                <a>Downloads</a>
              </Link>
            </li>

            <li>
              <Link route="cart">
                <a>
                  Cart{" "}
                  {props.cart && props.cart.length > 0 && (
                    <span className="badge badge-warning">
                      {props.cart.length}
                    </span>
                  )}
                </a>
              </Link>
            </li>

            <li>
              <Link route="products">
                <a>Shop</a>
              </Link>
            </li>

            {props.user && (
              <li>
                <Link route="orders">
                  <a>Orders</a>
                </Link>
              </li>
            )}

            <li>
              <Link route="products">
                <a>Contact</a>
              </Link>
            </li>

            {props.user && (
              <li>
                <Link route="#">
                  <a>
                    <button className="button" onClick={props.logoutUser}>
                      Sign out
                    </button>
                  </a>
                </Link>
              </li>
            )}

            {!props.user && (
              <li>
                <Link route="register">
                  <a>Sign Up</a>
                </Link>
              </li>
            )}

            {props.user === null && (
              <li>
                <Link route="login">
                  <a>
                    <button className="button">Sign in</button>
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <SideNav
        user={props.user}
        cart={props.cart}
        isOpen={isOpen}
        logoutUser={props.logoutUser}
        state={state}
        setState={setState}
        handleNavToggle={handleNavToggle}
      />

      <div
        className={isOpen ? "back-drop back-drop-open" : "back-drop"}
        onClick={() => handleNavToggle()}
      />
    </Fragment>
  );
};

export default withRouter(Nav);
