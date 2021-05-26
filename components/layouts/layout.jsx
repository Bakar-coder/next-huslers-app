import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Nav from "./nav";
import { withRouter } from "next/router";
import Scripts from "./scripts";

import { setUser, logoutUser, setCart, getCart, searchItem } from "../../store/actions";
import Header from "../header";
import Footer from "../partials/footer";

const Layout = ({
  cart,
  children,
  getCart,
  setUser,
  user,
  logoutUser,
  router,
  setCart,
  products,
  searchItem
}) => {
  useEffect(() => {
    user && getCart();
  }, [user, getCart]);
  if (!user) setUser();

  return (
    <Fragment>
      <Scripts />
      <Header />
      {router.route === "/admin" ? null : router.route ===
        "/login" ? null : router.route === "/register" ? null : (
        <Nav user={user} logoutUser={logoutUser} router={router} cart={cart} searchItem={searchItem} />
      )}
      {children}
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = ({ auth, products }) => ({
  user: auth.user,
  products: products.products,
  cart: products.cart,
});
export default connect(mapStateToProps, {
  setUser,
  logoutUser,
  setCart,
  getCart,
  searchItem
})(withRouter(Layout));
