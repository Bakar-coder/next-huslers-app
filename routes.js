const routes = (module.exports = require("next-routes")());
routes
  .add("about")
  .add("cart")
  .add("checkout")
  .add("products")
  .add("payment")
  .add("/product/:slug", "product")
  .add("/admin-edit-product/:id", "admin-edit-product")
  .add("admin-products")
  .add("admin-add-product")
  .add("login")
  .add("register");
