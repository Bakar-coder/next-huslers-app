import React from "react";
import { connect } from "react-redux";
import CheckoutComponent from "../components/shop/checkout";
import { SET_PRODUCTS } from "../store/types";
import axios from "axios";
import { getPaymentMethods } from "../store/actions";

const Checkout = ({
  cart,
  user,
  shipping,
  products,
  total,
  getPaymentMethods,
}) => {
  return (
    <div>
      <CheckoutComponent
        user={user}
        cart={cart}
        shipping={shipping}
        products={products}
        total={total}
        getPaymentMethods={getPaymentMethods}
      />
    </div>
  );
};

Checkout.propTypes = {};

Checkout.getInitialProps = async ({ store }) => {
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

function mapState({ auth, products, shop }) {
  return {
    user: auth.user,
    cart: products.cart,
    shipping: shop.shipping,
    products: products.products,
    total: products.total,
  };
}

export default connect(mapState, { getPaymentMethods })(Checkout);
