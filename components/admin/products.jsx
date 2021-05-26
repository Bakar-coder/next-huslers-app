import React from "react";
import Product from "./product";

const AdminProducts = ({ products, deleteProduct }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Product products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default AdminProducts;
