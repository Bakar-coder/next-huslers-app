import React, { Fragment } from "react";
import { Link } from "../../routes";

const Cart = ({
  cart,
  products,
  auth,
  total,
  deleteCartItem,
  productIncrement,
  productDecrement,
  loading,
}) => {
  const cartProds = [];

  cart &&
    cart.map((item) => {
      products &&
        products.map((prod) => {
          if (prod._id === item.productId) {
            prod.quantity = item.quantity;
            cartProds.push(prod);
          }
        });
    });

  return (
    <div className='container mt-5' style={{minHeight: '100vh'}}>
      <div className='dashbox'>
        <div className='dashbox__title'>
          <h3>
            <i className='icon ion-ios-cart'></i> Cart items
          </h3>

          <div className='dashbox__wrap'>
            <a className='dashbox__more' href='catalog.html'>
              Clear All
            </a>
          </div>
        </div>

        <div
          className='dashbox__table-wrap mCustomScrollbar _mCS_2 mCS_no_scrollbar'
          style={{ overflow: "visible" }}
        >
          <div
            id='mCSB_2'
            className='mCustomScrollBox mCS-custom-bar3 mCSB_horizontal mCSB_outside'
            tabindex='0'
            style={{ maxHeight: "226.667px" }}
          >
            <div
              id='mCSB_2_container'
              className='mCSB_container mCS_x_hidden mCS_no_scrollbar_x OverflowTable'
              style={{
                position: "relative",
                top: "0px",
                left: "0px",
                width: "501px",
                minWidth: "100%",
                overflowX: "inherit",
              }}
              dir='ltr'
            >
              <table className='main__table main__table--dash'>
                <thead>
                  <tr>
                    <th>IMAGE</th>
                    <th>TITLE</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                    <th>SUB-TOTAL</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {cartProds.length > 0 &&
                    cartProds.map((product) => (
                      <tr key={product._id}>
                        <td>
                          <div className='main__table-text image-container'>
                            <img
                              src={`${process.env.BASE_URL}/${product.file}`}
                              alt={product.title}
                            />
                          </div>
                        </td>
                        <td>
                          <div className='main__table-text'>
                            {product.title}
                          </div>
                        </td>
                        <td>
                          <div className='main__table-text'>
                            {product.quantity}
                          </div>
                        </td>
                        <td>
                          <div className='main__table-text'>
                            {product.price}
                          </div>
                        </td>
                        <td>
                          <div className='main__table-text'>
                            {(product.quantity * product.price).toFixed(2)}
                          </div>
                        </td>

                        <td>
                          <div className='main__table-text '>
                            <div className="delete-item">
                            {loading ? (
                              <span className='badge-btn'>
                                <img src='/assets/images/preloader.gif' />
                              </span>
                            ) : (
                              <span
                                className='badge-btn'
                                onClick={() => productDecrement(product, auth)}
                              >
                                <p>-</p>
                              </span>
                            )}
                            {loading ? (
                              <span className='badge-btn'>
                                <img src='/assets/images/preloader.gif' />
                              </span>
                            ) : (
                              <span
                                className='badge-btn '
                                onClick={() => productIncrement(product, auth)}
                              >
                                <p>+</p>
                              </span>
                            )}
                            <button
                              className='btn btn-sm btn-danger'
                              onClick={() => deleteCartItem(product)}
                            >
                              Delete
                            </button>
                            </div>  
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className='order-sec'>
            <h4>
              Grand Total : <span>$ {total}</span>
            </h4>

            <div>
              <Link route='/products'>
                <a>
                  <button
                    className='btn btn-primary btn-lg'
                    style={{ textTransform: "uppercase" }}
                  >
                    &larr; Continue Shopping
                  </button>
                </a>
              </Link>

              <Link route='/shipping'>
                <a>
                  <button
                    className='btn btn-warning btn-lg'
                    style={{ textTransform: "uppercase" }}
                  >
                    Proceed to Checkout &rarr;
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div
            id='mCSB_2_scrollbar_horizontal'
            className='mCSB_scrollTools mCSB_2_scrollbar mCS-custom-bar3 mCSB_scrollTools_horizontal'
            style={{ display: "none" }}
          >
            <div className='mCSB_draggerContainer'>
              <div
                id='mCSB_2_dragger_horizontal'
                className='mCSB_dragger'
                style={{
                  position: "absolute",
                  minWidth: "30px",
                  width: "0px",
                  left: "0px",
                }}
              >
                <div className='mCSB_dragger_bar'></div>
                <div className='mCSB_draggerRail'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;

{
  /* <tr>
  <td>
    <div className='main__table-text'>54</div>
  </td>
  <td>
    <div className='main__table-text'>Benched</div>
  </td>
  <td>
    <div className='main__table-text'>Movie</div>
  </td>
  <td>
    <div className='main__table-text main__table-text--rate'>
      <i className='icon ion-ios-star'></i> 9.1
                      </div>
  </td>
</tr> */
}

{
  /* <div className='cart'>
  <div className='table-content table-responsive'>
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Sub-Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {cartProds.length > 0 &&
          cartProds.map((product) => (
            <tr key={product._id}>
              <td>
                <div className='image-container'>
                  <img
                    src={`${process.env.BASE_URL}/${product.cover}`}
                    alt={product.title}
                  />
                </div>
              </td>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{(product.quantity * product.price).toFixed(2)}</td>

              <td>
                {loading ? (
                  <span className='badge badge-primary'>
                    <img src='/assets/images/preloader.gif' />
                  </span>
                ) : (
                    <span
                      className='badge badge-warning'
                      onClick={() => productDecrement(product, auth)}
                    >
                      -
                    </span>
                  )}
                {loading ? (
                  <span className='badge badge-primary'>
                    <img src='/assets/images/preloader.gif' />
                  </span>
                ) : (
                    <span
                      className='badge badge-primary'
                      onClick={() => productIncrement(product, auth)}
                    >
                      +
                    </span>
                  )}
                <button
                  className='btn btn-danger'
                  onClick={() => deleteCartItem(product)}
                >
                  Delete
                    </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>

  <div className='order-sec'>
    <h4>
      Grand Total : <span>$ {total}</span>
    </h4>

    <div>
      <Link route='/products'>
        <a>
          <button
            className='btn btn-primary btn-lg'
            style={{ textTransform: "uppercase" }}
          >
            &larr; Continue Shopping
              </button>
        </a>
      </Link>

      <Link route='/shipping'>
        <a>
          <button
            className='btn btn-warning btn-lg'
            style={{ textTransform: "uppercase" }}
          >
            Proceed to Checkout &rarr;
              </button>
        </a>
      </Link>
    </div>
  </div>
</div>






 */
}
