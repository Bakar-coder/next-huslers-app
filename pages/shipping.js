import React from "react";
import ShippingForm from "../components/shop/shipping";
import { setShipping } from "../store/actions";
import { connect } from "react-redux";
import axios from "axios";
const Shipping = ({ setShipping, user, shipping }) => (
  <ShippingForm setShipping={setShipping} user={user} shipping={shipping} />
);

Shipping.getInitialProps = async ({ store }) => {
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

const mapState = ({ auth, shop }) => ({
  user: auth.user,
  shipping: shop.shipping,
});
export default connect(mapState, { setShipping })(Shipping);
