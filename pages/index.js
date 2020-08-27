import React, { useEffect } from "react";
import axios from "axios";
import { SET_PRODUCTS } from "../store/types";
import Home from "../components/home";
import { connect } from "react-redux";
import { deleteProduct, setLoaded, addToCart } from "../store/actions";

const Index = ({ products, pageLoading, setLoaded, addToCart, auth, cart }) => {
  useEffect(() => {
    if (pageLoading) setLoaded();
  }, [setLoaded]);
  return pageLoading ? (
    <div className='center' style={{  minHeight: "88vh" }}>
      <img src='/assets/images/Preloader_2.gif' />
    </div>
  ) : (
    <div className='wrapper'>
      <Home products={products} addToCart={addToCart} auth={auth} cart={cart} />
    </div>
  );
};

Index.getInitialProps = async ({ store }) => {
  try {
    const url = `${process.env.BASE_URL}/api/products`;
    const { dispatch } = store;
    const { data } = await axios.get(url);
    if (data.products.length > 0) {
      const products = data.products;
      dispatch({ type: SET_PRODUCTS, payload: products });
      return { ...products };
    }
  } catch (ex) {
    console.log(ex);
  }
};

const mapState = ({ auth, products, loading }) => ({
  auth: auth.isAuthenticated,
  cart: products.cart,
  products: products.products,
  pageLoading: loading.loading,
});

export default connect(mapState, { deleteProduct, setLoaded, addToCart })(
  Index
);
