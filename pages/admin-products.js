import React from "react";
import Products from "../components/admin/products";
import { SET_PRODUCTS } from "../store/types";
import { connect } from "react-redux";
import { deleteProduct } from "../store/actions";
import { bindActionCreators } from "redux";

const AdminProducts = ({ products, deleteProduct }) => {
  return (
    <main className="section section-top">
      <div className="grid">
        <Products products={products} deleteProduct={deleteProduct} />
      </div>
    </main>
  )
};

AdminProducts.getInitialProps = async ({ store }) => {
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

export default connect(mapState, mapDispatch)(AdminProducts);
