const routes = (module.exports = require("next-routes")());
routes
  .add("about")
  .add("cart")
  .add("contact")
  .add("downloads")
  .add("events")
  .add("media")
  .add("gallery")
  .add("checkout")
  .add("products")
  .add("payment")
  .add("admin")
  .add("/product/:slug", "product")
  .add("/admin-edit-product/:id", "admin-edit-product")
  .add("admin-products")
  .add("admin-add-product")
  .add("add-promotion")
  .add("add-event")
  .add("login")
  .add("register");
