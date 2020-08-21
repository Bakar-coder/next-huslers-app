import React from "react";
import Product from "./product";

const AdminProducts = ({ products, deleteProduct }) => {
  return products ? (
    <main className="section section-top">
      <div className="grid">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </main>
  ) : null;
};

export default AdminProducts;
