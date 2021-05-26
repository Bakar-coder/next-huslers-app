import {
  SET_PRODUCTS,
  REMOVE_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_CART,
  SET_CART,
  DELETE_CART,
  CART_PRODUCT_DECREMENT,
  CART_PRODUCT_INCREMENT,
  SET_TOTAL_AMOUNT,
  SET_ORDERS,
} from "../types";

const productsState = {
  products: null,
  cart: null,
  orders: null,
  total: null,
};

export default (state = productsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case REMOVE_PRODUCTS:
      return { ...state, products: null };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: null,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [...state.products].map((prod) =>
          prod._id === payload._id ? payload : prod
        ),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products].filter(
          (prod) => prod._id !== payload._id
        ),
      };

    case GET_CART:
      return {
        ...state,
        cart: payload,
      };

    case SET_CART:
      return {
        ...state,
        cart: payload,
      };

    case DELETE_CART:
      return {
        ...state,
        cart: [...state.cart].filter((item) => item.productId !== payload._id),
      };

    case CART_PRODUCT_DECREMENT:
      return {
        ...state,
        cart: [...state.cart].map((item) =>
          item._id === payload._id ? payload : item
        ),
      };

    case CART_PRODUCT_INCREMENT:
      return {
        ...state,
        cart: [...state.cart].map((item) => {
          if (item.productId === payload._id) {
            const quantity = payload.quantity + 1;
            item = { ...item, quantity };
            return item;
          }
        }),
      };
    case SET_TOTAL_AMOUNT:
      return {
        ...state,
        total: payload,
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    default:
      return state;
  }
};
