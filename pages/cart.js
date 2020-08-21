import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cart from "../components/shop/cart";
import { withRouter } from "next/router";
import { Link } from "../routes";
import { SET_PRODUCTS } from "../store/types";
import axios from "axios";
import {
  deleteCartItem,
  productDecrement,
  addToCart,
  submitOrder,
  setAmount,
  productIncrement,
} from "../store/actions";

const ShoppingCart = ({
  cart,
  products,
  auth,
  addToCart,
  total,
  deleteCartItem,
  productDecrement,
  productIncrement,
  submitOrder,
  setAmount,
  router,
  loading,
}) => {
  const cartProds = [];

  cart &&
    cart.map((item) => {
      products &&
        products.map((prod) => {
          if (prod._id === item.productId) {
            prod.quantity = item.quantity;
            cartProds.push(prod);
          }
        });
    });

  if (cart && cartProds.length > 0) setAmount(cartProds);
  return cart && cart.length > 0 ? (
    <div className='section section-top'>
      <Cart
        cart={cart}
        products={products}
        auth={auth}
        addToCart={addToCart}
        productDecrement={productDecrement}
        deleteCartItem={deleteCartItem}
        submitOrder={submitOrder}
        total={total}
        router={router}
        productIncrement={productIncrement}
        loading={loading}
      />
    </div>
  ) : (
    <div className='cart' style={{ textAlign: "center" }}>
      <p>No items added to your shopping Cart yet.</p>
      <Link route='/products'>
        <button
          className='btn btn-warning btn-lg'
          onClick={() => console.log("to shop")}
          style={{ textTransform: "uppercase", marginTop: "4rem" }}
        >
          Start Shopping &rarr;
        </button>
      </Link>
    </div>
  );
};

ShoppingCart.getInitialProps = async ({ store }) => {
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

const mapState = ({ auth, products, loading }) => ({
  cart: products.cart,
  products: products.products,
  loading: loading.loading,
  auth: auth.isAuthenticated,
  total: products.total,
});
const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      addToCart,
      deleteCartItem,
      productDecrement,
      submitOrder,
      setAmount,
      productIncrement,
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(withRouter(ShoppingCart));
