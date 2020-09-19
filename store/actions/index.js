import { setUser, logoutUser, loginUser, registerUser } from "./authActions";
import {
  addToCart,
  deleteCartItem,
  productDecrement,
  submitOrder,
  setAmount,
  setCart,
  getCart,
  setShipping,
  getPaymentMethods,
  productIncrement,
  payWithMtnMomo,
  createOrder,
  deleteOrder,
  momoPay,
} from "./productsActions";

import {
  add_media,
  edit_media,
  deleteMedia,
  add_promo,
  deletePromo,
} from "./mediaActions";

import { add_event, deleteEvent, add_image, delete_image } from "./eventsActions";

import { add_Product, edit_Product, deleteProduct } from "./adminActions";
import { setLoaded, setLoading, searchItem } from "./loadingActions";
export {
  setUser,
  logoutUser,
  loginUser,
  registerUser,
  deleteProduct,
  addToCart,
  add_Product,
  edit_Product,
  deleteCartItem,
  productDecrement,
  submitOrder,
  setAmount,
  setCart,
  getCart,
  setShipping,
  getPaymentMethods,
  productIncrement,
  payWithMtnMomo,
  createOrder,
  deleteOrder,
  momoPay,
  setLoaded,
  setLoading,
  add_media,
  edit_media,
  deleteMedia,
  add_promo,
  deletePromo,
  add_event,
  deleteEvent,
  add_image, delete_image, searchItem
};
