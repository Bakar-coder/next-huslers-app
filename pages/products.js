import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import ProductsComponent from "../components/products/products";
import { bindActionCreators } from "redux";
import { deleteProduct } from "../store/actions";
import axios from "axios";
import { SET_PRODUCTS } from "../store/types";

const Products = ({ products, deleteProduct }) => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>NextApp | Products</title>
      </Helmet>
      <div className="container">
        <ProductsComponent products={products} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
};

Products.getInitialProps = async ({ store }) => {
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

const mapState = ({ products }) => ({ products: products.products });
const mapDispatch = (dispatch) =>
  bindActionCreators({ deleteProduct }, dispatch);

export default connect(mapState, mapDispatch)(Products);
