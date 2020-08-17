import React from "react";
import Payment from "../components/shop/payment-method";
import { connect } from "react-redux";
import { createOrder } from "../store/actions";

const PaymentMethod = ({ total, createOrder, shipping }) => {
  return (
    <Payment total={total} createOrder={createOrder} shipping={shipping} />
  );
};

function mapState({ products, shop }) {
  return {
    total: products.total,
    shipping: shop.shipping,
  };
}

export default connect(mapState, { createOrder })(PaymentMethod);
