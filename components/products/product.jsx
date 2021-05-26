import React from "react";
import { withRouter } from "next/router";
import { Link } from "../../routes";

const Product = ({ auth, products, router, addToCart, cart }) => {
  return (
    <section className='content'>
      <div className='container'>
        <div class='tab-content'>
          <div class='row'>
            {products &&
              products.map((product) => (
                <div
                  key={product._id}
                  class='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4'
                >
                  <div className='single-product'>
                    <div className='product-img img-full'>
                      <a href='single-product.html'>
                        <img
                          src={`${process.env.BASE_URL}/${product.file}`}
                          alt={product.title}
                        />
                      </a>
                      <div className='quick-view'>
                        <a href='#open-modal' data-toggle='modal'>
                          <i className='fa fa-search'></i>
                        </a>
                      </div>
                      {/* <span className='new-sticker'>new</span> */}
                      {/* <span className='discount-sticker'>-15%</span> */}
                    </div>
                    <div className='product-content'>
                      <h3>
                        <a href='single-product.html'>{product.title}</a>
                      </h3>
                      <div className='product-review'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='product-price-and-shipping'>
                       {product.discount &&  <span className='regular-price'>$23.90</span>}
                        <span className='now-price'>${product.price}</span>
                      </div>
                      <div
                        className='product-action-btn'
                        onClick={() => addToCart(product, router, auth, cart)}
                      >
                        <a href='#'>Add To Cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Product);
