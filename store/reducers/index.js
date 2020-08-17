import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import shopReducer from "./shopReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  shop: shopReducer,
});
