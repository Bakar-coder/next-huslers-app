import React from "react";
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
    <div className='cart'>
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
  );
};

Cart.propTypes = {};

export default Cart;
