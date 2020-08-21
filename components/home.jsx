import React from "react";
import Carousel from "./carousel";
import { Link } from "../routes";
import { withRouter } from "next/router";

const Home = ({ products, addToCart, router, auth, cart }) => {
  return (
    <div className='page'>
      <header className='slider'>
        <Carousel />
      </header>
      <main className='section' style={{ padding: "2rem" }}>
        <div className='padding_sm'>


          <div className="content__head">

          				<div className="row">
          					<div className="col-12">
          						<h2 className="content__title">Featured Products</h2>
          					</div>
          				</div>

                </div>




          <div className='grid'>
            {products &&
              products.map(
                (product) =>
                  product.featured && (
                    <div className='card' key={product._id}>
                      <img
                        src={`${process.env.BASE_URL}/${product.cover}`}
                        alt='product-image'
                        className='img-fluid img-center'
                      />

                      <div className='card--content'>
                        <h3 className='card-title'>{product.title} </h3>
                        <p>{product.description}</p>
                        <div className='card--footer'>
                          <h4 className='card--price'> $ {product.price} </h4>
                          <div>
                            <button type='button' className='btn btn-warning'>
                              <Link to={`/product/${product.title}`}>View</Link>
                            </button>

                            <button
                              type='submit'
                              className='btn btn--primary'
                              onClick={() =>
                                addToCart(product, router, auth, cart)
                              }
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default withRouter(Home);
