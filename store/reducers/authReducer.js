import { LOGOUT, SET_USER, REMOVE_USER, REQUIRE_AUTH } from "../types";
import cookie from "js-cookie";

const authState = {
  user: null,
  isAuthenticated: false,
  resetToken: null,
};

export default (state = authState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return { ...state, user: payload, isAuthenticated: true };
    case LOGOUT:
      cookie.remove("x-auth-token");
      return { ...state, user: null, isAuthenticated: false };
    case REQUIRE_AUTH:
      const { router } = payload;
      router.pushRoute("login");
      return { ...state };
    case REMOVE_USER:
      cookie.remove("x-auth-token");
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
