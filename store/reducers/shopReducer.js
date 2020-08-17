import { SET_SHIPPING, SET_ORDERS } from "../types";
import cookie from "js-cookie";

const shopState = {
  shipping: null,
  orders: null,
};

export default (state = shopState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SHIPPING:
      return { ...state, shipping: payload };

    case SET_ORDERS:
      return { ...state, orders: payload };

    default:
      return state;
  }
};
