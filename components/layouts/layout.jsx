import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Nav from "./nav";

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
  }, [user, getCart])
  if (!user) setUser();
  
  return (
    <Fragment>
      <Header />
      <Nav user={user} logoutUser={logoutUser} router={router} cart={cart} />
      {children}
    </Fragment>
  );
};

const mapStateToProps = ({ auth, products }) => ({
  user: auth.user,
  products: products.products,
  cart: products.cart
});
export default connect(mapStateToProps, { setUser, logoutUser, setCart, getCart })(
  Layout
);
