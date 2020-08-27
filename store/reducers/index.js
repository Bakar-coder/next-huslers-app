import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import shopReducer from "./shopReducer";
import loading from "./loadingReducer";
import media from "./mediaReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  shop: shopReducer,
  loading,
  media,
});
