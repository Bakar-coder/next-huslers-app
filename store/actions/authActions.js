import catchException from "../../utils/exceptions";
import setAlert from "../../utils/alerts";
import cookie from "js-cookie";
import { SET_USER, REMOVE_USER } from "../types";
import Jwt from "jwt-decode";

const userToken = cookie.get("x-auth-token");

export const registerUser = (user, router) => async (
  dispatch,
  getState,
  api
) => {
  try {
    const res = await api.post("/users/register", user);
    if (res.data.success) {
      setAlert(res.data);
      router.replace("login");
    }
  } catch (ex) {
    catchException(ex);
  }
};

export const loginUser = (user) => async (dispatch, getState, api) => {
  try {
    const res = await api.post("/users/login", user);
    if (res.data.success) {
      const token = res.headers["x-auth-token"];
      cookie.set("x-auth-token", token);
      const user = await Jwt(token);
      setAlert(res.data, user);
      setTimeout(() => {
        return (window.location = "/");
      }, 5000);
    }
  } catch (ex) {
    catchException(ex);
    dispatch({ type: REMOVE_USER });
  }
};

export const setUser = () => async (dispatch) => {
  try {
    const token = cookie.get("x-auth-token");
    if (token) {
      const user = await Jwt(token);
      if (user.exp < Date.now() / 1000) {
        dispatch({ type: REMOVE_USER });
        return (window.location = "/");
      }
      dispatch({ type: SET_USER, payload: user });
    }
  } catch (ex) {
    catchException(ex);
    dispatch({ type: REMOVE_USER });
  }
};

export const logoutUser = () => async (dispatch) => {
  const user = await Jwt(userToken);
  let data = { msg: "You've successfully logged out your account." };
  if (user)
    data = { msg: `Have a good time - ${user.firstName} ${user.lastName}` };

  setAlert(data);
  user && dispatch({ type: REMOVE_USER });
  setTimeout(() => {
    window.location = "/";
  }, 3000);
};
