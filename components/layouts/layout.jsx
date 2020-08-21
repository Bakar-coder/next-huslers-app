import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Nav from "./nav";
import { withRouter } from "next/router";

import { setUser, logoutUser, setCart, getCart } from "../../store/actions";
import Header from "../header";

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
}) => {
  useEffect(() => {
    user && getCart();
  }, [user, getCart]);
  if (!user) setUser();

  console.log(router);
  return (
    <Fragment>
      <Header />
      {router.route === "/admin" ? null : (
        <Nav user={user} logoutUser={logoutUser} router={router} cart={cart} />
      )}
      {children}
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
})(withRouter(Layout));
