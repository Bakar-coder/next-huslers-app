import React from "react";
import Product from "./product";
import { connect } from "react-redux";
import { productIncrement, addToCart } from "../../store/actions";
import { bindActionCreators } from "redux";

const Products = ({ auth, products, productIncrement, addToCart, cart }) => {
  return (
    <div style={{ marginTop: "5.5rem" }}>
      <Product
        products={products}
        productIncrement={productIncrement}
        addToCart={addToCart}
        auth={auth}
        cart={cart}
      />
    </div>
  );
};

const mapState = ({ auth, products }) => ({
  auth: auth.isAuthenticated,
  products: products.products,
  cart: products.cart,
});
const mapDispatch = (dispatch) =>
  bindActionCreators({ productIncrement, addToCart }, dispatch);

export default connect(mapState, mapDispatch)(Products);
