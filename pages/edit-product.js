import React from "react";
import { connect } from "react-redux";
import EditProduct from "../components/admin/edit-product";
import { edit_Product } from "../store/actions";

const Edit = ({ products, edit_Product }) => (
  <EditProduct products={products} edit_Product={edit_Product} />
);

const mapState = ({ products }) => ({ products: products.products });

export default connect(mapState, { edit_Product })(Edit);
