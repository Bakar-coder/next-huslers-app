import React, { Fragment } from "react";
import { Link } from "../../routes";

const Product = ({ product, onDelete }) => {
  return (
    <Fragment>
      <section className='content'>
        <div className='container'>
          <div class='tab-content'>
            <div class='row'>
              <div class='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4'>
                <div className='single-product'>
                  <div className='product-img img-full'>
                    <a href='single-product.html'>
                      <img src='/img/product/product1.jpg' alt='' />
                    </a>
                    <div className='quick-view'>
                      <a href='#open-modal' data-toggle='modal'>
                        <i className='fa fa-search'></i>
                      </a>
                    </div>
                    <span className='new-sticker'>new</span>
                    <span className='discount-sticker'>-15%</span>
                  </div>
                  <div className='product-content'>
                    <h3>
                      <a href='single-product.html'>
                        canon vista fhd 4k camcorder 2214c002
                      </a>
                    </h3>
                    <div className='product-review'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <div className='product-price-and-shipping'>
                      <span className='regular-price'>$23.90</span>
                      <span className='now-price'>$21.51</span>
                    </div>
                    <div className='product-action-btn'>
                      <a href='cart.html'>Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Product;
