import React from "react";
import axios from "axios";
import { SET_ORDERS } from "../store/types";
import cookie from "js-cookie";
import OrdersComponent from "../components/shop/orders";
import { connect } from "react-redux";
import { deleteOrder } from "../store/actions";

const Orders = ({ orders, deleteOrder }) => {
  return (
    <div className='wrapper' style={{ minHeight: "88vh" }}>
      {" "}
      <OrdersComponent orders={orders} deleteOrder={deleteOrder} />
    </div>
  );
};

Orders.getInitialProps = async ({ store }) => {
  const { dispatch } = store;
  const url = `${process.env.BASE_URL}/api/shop/orders`;
  const { data } = await axios.get(url, {
    headers: { "x-auth-token": cookie.get("x-auth-token") || null },
  });
  if (data.success) {
    const orders = data.orders;
    dispatch({ type: SET_ORDERS, payload: orders });
    return { ...orders };
  }
};

const mapState = ({ shop }) => ({ orders: shop.orders });

export default connect(mapState, { deleteOrder })(Orders);
