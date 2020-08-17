import React from "react";
import { withRouter } from "next/router";
import { Link } from "../routes";
import { api } from "../config/config.json";

const Product = ({ product, deleteProduct }) => {
  const onDelete = () => deleteProduct(product);
  return (
    <div className="card" key={product._id}>
      <div className="card--image">
        <img src={`${api}/${product.cover}`} alt="product-cover" />
      </div>
      <div className="card--content">
        <h3 className="card-title">{product.title} </h3>
        <div className="card--footer">
          <h4 className="card--price"> $ {product.price} </h4>
          <div>
            <div className="grouped">
              <button type="submit" className="btn btn--primary">
                <Link route={`/admin/products/edit-product/${product._id}`}>
                  Edit
                </Link>
              </button>
              <button
                type="submit"
                className="btn btn--danger"
                onClick={() => onDelete()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product);
