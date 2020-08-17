import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { SET_PRODUCTS } from "../store/types";
import Home from "../components/home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteProduct } from "../store/actions";

const Index = () => {
  return (
    <div className="wrapper">
      <Home />
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
      return { products };
    }
  } catch (ex) {
    console.log(ex);
  }
};

const mapState = ({ auth, products }) => ({
  auth: auth.isAuthenticated,
  products: products.products,
});
const mapDispatch = (dispatch) =>
  bindActionCreators({ deleteProduct }, dispatch);

export default connect(mapState, mapDispatch)(Index);
