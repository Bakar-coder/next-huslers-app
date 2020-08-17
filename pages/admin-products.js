import React from "react";
import Product from "./product";
import { SET_PRODUCTS } from "../store/types";
import { connect } from "react-redux";
import { deleteProduct } from "../store/actions";
import { bindActionCreators } from "redux";

const AdminProducts = ({ products, deleteProduct }) => {
  return products ? (
    <main className="section section-top">
      <div className="grid">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </main>
  ) : null;
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
