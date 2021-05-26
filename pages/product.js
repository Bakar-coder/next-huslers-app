import React from "react";
import ProductDetails from "../components/products/productDetail";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import { bindActionCreators } from "redux";

const SingleProduct = ({ media, auth, addToCart }) => {
  return (
    <div className='wrapper' style={{ minHeight: "88vh" }}>
      <ProductDetails media={media} addToCart={addToCart} auth={auth} />
    </div>
  );
};

const mapState = ({ media, auth }) => ({
  media: media.media,
  auth: auth.isAuth,
});

const mapDispatch = (dispatch) => bindActionCreators({ addToCart }, dispatch);

export default connect(mapState, mapDispatch)(SingleProduct);
