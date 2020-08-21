import React from "react";
import { Link } from "../../routes";

const Product = ({ product, onDelete }) => {
  return (
    <div className="card" key={product._id}>
      <div className="card--image">
        <img src={`${process.env.BASE_URL}/${product.cover}`} alt={product.title} />
      </div>
      <div className="card--content">
        <h3 className="card-title">{product.title} </h3>
        <div className="card--footer">
          <h4 className="card--price"> $ {product.price} </h4>
          <div>
            <div className="grouped">
              <button type="submit" className="btn btn--primary">
                <Link route={`/admin-edit-product/${product._id}`}>Edit</Link>
              </button>
              <button
                type="submit"
                className="btn btn--danger"
                onClick={() => onDelete(product)}
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

export default Product;
