import React, { Fragment } from "react";
import { Link } from "../../routes";

function SideNav(props) {
  const { user, isOpen, logoutUser, state, setState, handleNavToggle, cart } = props;
  return (
    <Fragment>
      <div className={isOpen ? "side-nav side-nav-open" : "side-nav"}>
        <div className="nav-header" />
        <ul className="list-group">
          <li className="list-item" onClick={handleNavToggle}>
            <Link route="/">
              <a>Home</a>
            </Link>
          </li>

          <li className="list-item" onClick={handleNavToggle}>
            <Link route="/about">
              <a>About</a>
            </Link>
          </li>
          {user && user["stuff"] && (
              <li className="list-item" onClick={handleNavToggle}>
                <Link route="/admin-products">
                  <a>Admin-Products</a>
                </Link>
              </li>
            )}
            {user && user["stuff"] && (
              <li className="list-item" onClick={handleNavToggle}>
                <Link route="/admin/products/add-product">
                  <a>Add-Product</a>
                </Link>
              </li>
            )}

            <li className="list-item" onClick={handleNavToggle}>
              <Link route="/cart">
                <a>Cart {cart && cart.length > 0 && (
                  <span className='badge badge-warning'>{cart.length}</span>
                )}</a>
              </Link>
            </li>

          {user && (
            <li className="list-item" onClick={handleNavToggle}>
              <Link route="#">
                <a onClick={logoutUser}>Sign out</a>
              </Link>
            </li>
          )}

          {user === null && (
            <li className="list-item" onClick={handleNavToggle}>
              <Link route="/register">
                <a>Sign Up</a>
              </Link>
            </li>
          )}

          {user === null && (
            <li className="list-item" onClick={handleNavToggle}>
              <Link route="/login">
                <a>Sign in</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
}

export default SideNav;
