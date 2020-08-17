import React from "react";
import Product from "./product";
import { connect } from "react-redux";
import { productIncrement, addToCart } from "../../store/actions";
import { bindActionCreators } from "redux";

const Products = ({ auth, products, productIncrement, addToCart, cart }) => {
  return products ? (
    <main className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="padding_sm">
        <div className="grid">
          {products.map((product) => (
            <Product
              product={product}
              productIncrement={productIncrement}
              addToCart={addToCart}
              auth={auth}
              cart={cart}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </main>
  ) : null;
};

const mapState = ({ auth, products }) => ({
  auth: auth.isAuthenticated,
  products: products.products,
  cart: products.cart,
});
const mapDispatch = (dispatch) =>
  bindActionCreators({ productIncrement, addToCart }, dispatch);

export default connect(mapState, mapDispatch)(Products);
