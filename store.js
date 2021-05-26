import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/reducers";
import cookie from "js-cookie";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api`,
  headers: { "x-auth-token": cookie.get("x-auth-token") || null },
});

export const initStore = (initialState = {}) => {
  const middleware = [thunk.withExtraArgument(axiosInstance)];
  return createStore(reducer, initialState, applyMiddleware(...middleware));
};
