import {
  GET_PRODUCTS,
  SET_CART,
  DELETE_CART,
  CART_PRODUCT_DECREMENT,
  SET_TOTAL_AMOUNT,
  SET_ORDERS,
  SET_SHIPPING,
  LOADING,
  REMOVE_LOADING,
} from "../types";
import catchException from "../../utils/exceptions";
import setAlert from "../../utils/alerts";
import axios from "axios";

export const getProducts = () => async (dispatch, getState, api) => {
  try {
    const { data } = await api.get("/api/products");
    return dispatch({ type: GET_PRODUCTS, payload: data.products });
  } catch (ex) {
    catchException(ex);
  }
};

export const setCart = (cart) => async (dispatch, getState, api) => {
  try {
    return dispatch({ type: SET_CART, payload: cart });
  } catch (ex) {
    catchException(ex);
  }
};

export const getCart = () => async (dispatch, getState, api) => {
  const { data } = await api.get("/shop/cart");
  if (data.success) return dispatch({ type: SET_CART, payload: data.products });
};

export const productIncrement = (product, auth) => async (
  dispatch,
  getState,
  api
) => {
  try {
    if (auth) {
      const { data } = await api.post("/shop/cart", { _id: product._id });
      dispatch({ type: LOADING });
      return (
        data.success &&
        dispatch({ type: REMOVE_LOADING }) &&
        dispatch({ type: SET_CART, payload: data.cart })
      );
    }
  } catch (ex) {
    catchException(ex);
  }
};

export const setLoaded = () => async (dispatch, getState, api) => {
  try {
    dispatch({ type: REMOVE_LOADING, payload: false });
  } catch (ex) {
    catchException(ex);
  }
};

export const addToCart = (product, router, auth, cart) => async (
  dispatch,
  getState,
  api
) => {
  try {
    if (!auth) {
      const ex = {
        msg: "Login to add items to cart",
      };
      catchException(ex);
      return router.push("/login");
    }

    const { data } = await api.post("/shop/cart", { _id: product._id });
    return data.success && dispatch({ type: SET_CART, payload: data.cart });
  } catch (ex) {
    catchException(ex);
  }
};

export const productDecrement = (product, auth) => async (
  dispatch,
  getState,
  api
) => {
  try {
    if (auth) {
      if (product.quantity > 1) {
        const { data } = await api.post("/shop/cart-decrement", {
          _id: product._id,
        });
        dispatch({ type: LOADING });
        return (
          data.success &&
          dispatch({ type: REMOVE_LOADING }) &&
          dispatch({ type: CART_PRODUCT_DECREMENT, payload: data.cart })
        );
      }
    }
  } catch (ex) {
    catchException(ex);
  }
};

export const submitOrder = () => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/api/orders");
    setAlert(data);
    if (data.success) {
      const { data } = await api.get("/api/orders");
      return dispatch({ type: SET_ORDERS, payload: data.orders });
    }
  } catch (ex) {
    catchException(ex);
  }
};

export const deleteCartItem = (cartItem) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/shop/delete-cart-item", cartItem);
    if (data.success) {
      dispatch({ type: DELETE_CART, payload: cartItem });
    }
  } catch (ex) {
    catchException(ex);
  }
};

export const setAmount = (cart) => async (dispatch) => {
  try {
    const totalAmount = cart
      .map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b)
      .toFixed(2);
    dispatch({ type: SET_TOTAL_AMOUNT, payload: totalAmount });
  } catch (ex) {
    catchException(ex);
  }
};

export const getOrders = (orders) => async (dispatch, getState, api) => {
  try {
    if (!orders) {
      const { data } = await api.get("/api/orders");
      dispatch({ type: SET_ORDERS, payload: data.orders });
    }
  } catch (ex) {
    catchException(ex);
  }
};

export const setShipping = (data, router) => async (dispatch, getState, api) => {
  try {
    dispatch({ type: SET_SHIPPING, payload: data });
    return router.push("/checkout");
  } catch (ex) {
    catchException(ex);
  }
};

export const getPaymentMethods = (router, total) => async (dispatch) => {
  try {
    dispatch({ type: SET_TOTAL_AMOUNT, payload: total });
    return router.push("/payment");
  } catch (ex) {
    catchException(ex);
  }
};

export const payWithMtnMomo = (num, total) => async (dispatch) => {
  try {
    const getApiUser = await axios.get(
      "https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/1029251a-4ab8-4e37-843e-8fb896e18814",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "0c963b4721a348f39a7a706cfe4e0b53",
        },
      }
    );

    if (getApiUser.data) {
      const getApiKey = await axios.post(
        "https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/1029251a-4ab8-4e37-843e-8fb896e18814/apikey",
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "0c963b4721a348f39a7a706cfe4e0b53",
          },
        }
      );

      if (getApiKey.data) {
        const generateAuthToken = await axios.post(
          "https://sandbox.momodeveloper.mtn.com/collection/token/",
          {
            authorization: {
              "Basic Auth": {
                Username: "1029251a-4ab8-4e37-843e-8fb896e18814",
                Password: "d84dbe50e57a4719b2a075da2ad11a83",
              },
            },
            headers: {
              "Ocp-Apim-Subscription-Key": "0c963b4721a348f39a7a706cfe4e0b53",
            },
          }
        );

        if (generateAuthToken.data) {
          const body = {
            amount: total,
            currency: "USD",
            externalId: "674534",
            payer: {
              partyIdType: "MSISDN",
              partyId: num,
            },
            payerMessage: "payment for products",
            payeeNote: "payer note",
          };

          const paymentRequest = await axios.post(
            "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
            body,
            {
              authorization: {
                "Bearer Token": {
                  Token: "1029251a-4ab8-4e37-843e-8fb896e18814",
                },
              },
              headers: {
                "Ocp-Apim-Subscription-Key": "0c963b4721a348f39a7a706cfe4e0b53",
              },
            }
          );

          if (paymentRequest.data) {
            const getPayment = await axios.get(
              "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/1029251a-4ab8-4e37-843e-8fb896e18814",
              {
                authorization: {
                  "Bearer Token": {
                    Token: "1029251a-4ab8-4e37-843e-8fb896e18814",
                  },
                },
                headers: {
                  "X-Target-Environment": "sandbox",
                  "Ocp-Apim-Subscription-Key":
                    "0c963b4721a348f39a7a706cfe4e0b53",
                },
              }
            );

            if (getPayment.data) {
              const getccountBalance = await axios.get(
                "https://sandbox.momodeveloper.mtn.com/collection/v1_0/account/balance",
                {
                  authorization: {
                    "Bearer Token": {
                      Token: "1029251a-4ab8-4e37-843e-8fb896e18814",
                    },
                  },
                  headers: {
                    "X-Target-Environment": "sandbox",
                    "Ocp-Apim-Subscription-Key":
                      "0c963b4721a348f39a7a706cfe4e0b53",
                  },
                }
              );
            }
          }
        }
      }
    }

    console.log(num, total);
  } catch (ex) {
    catchException(ex);
  }
};

export const createOrder = (billing, router) => async (
  dispatch,
  getState,
  api
) => {
  try {
    const { data } = await api.post("/shop/orders", billing);
    if (data.success) {
      dispatch({ type: SET_CART, payload: null });
      setAlert(data);
      return router.push("/orders");
    }
  } catch (ex) {
    catchException(ex);
  }
};

export const deleteOrder = (id) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/shop/orders/delete-order", {
      orderId: id,
    });
    if (data.success)
      return dispatch({ type: SET_ORDERS, payload: data.orders });
    setAlert(data);
  } catch (ex) {
    catchException(ex);
  }
};

export const momoPay = (billing, router, number, total, createOrder) => async (
  dispatch,
  getState,
  api
) => {
  try {
    const dataPayload = { ...number, total: Number(total) };
    const { data } = await api.post("/shop/pay", dataPayload);
    if (data.success) {
      createOrder(billing, router);
    }
  } catch (ex) {
    catchException(ex);
  }
};
