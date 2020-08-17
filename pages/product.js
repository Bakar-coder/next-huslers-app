import React from "react";
import ProductDetails from "../components/products/productDetail";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import { bindActionCreators } from "redux";

const SingleProduct = ({ products, auth, addToCart }) => {
  return (
    <section className="wrapper">
      <ProductDetails products={products} addToCart={addToCart} auth={auth} />
    </section>
  );
};

const mapState = ({ products, auth }) => ({
  products: products.products,
  auth: auth.isAuth,
});

const mapDispatch = (dispatch) => bindActionCreators({ addToCart }, dispatch);

export default connect(mapState, mapDispatch)(SingleProduct);
