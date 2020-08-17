import React from "react";
import { withRouter } from "next/router";
import { Link } from "../../routes";

const Product = ({ auth, product, router, addToCart, cart }) => {
  return (
    <div className="card" key={product.id}>
      <img
        src={`${process.env.BASE_URL}/${product.cover}`}
        alt="product-image"
        className="img-fluid img-center"
      />

      <div className="card--content">
        <h3 className="card-title">{product.title} </h3>
        <p>{product.description}</p>
        <div className="card--footer">
          <h4 className="card--price"> $ {product.price} </h4>
          <div>
            <button type="button" className="btn btn-warning">
              <Link to={`/product/${product.title}`}>View</Link>
            </button>

            <button
              type="submit"
              className="btn btn--primary"
              onClick={() => addToCart(product, router, auth, cart)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product);
