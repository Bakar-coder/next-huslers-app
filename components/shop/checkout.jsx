import React from "react";
import { Link } from "../../routes";
import redirect from "nextjs-redirect";
import { withRouter } from "next/router";

const CheckoutComponent = ({
  cart,
  shipping,
  products,
  total,
  router,
  getPaymentMethods,
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

  const Redirect = redirect("/cart");

  const handlePayment = () => {
    getPaymentMethods(router, total);
  };

  return shipping && shipping.phone ? (
    <div className="section section-top">
      <div className="checkout-section">
        <div className="content">
          <div className="delivery-info">
            <h4 className="sub-title">BILLING Info.</h4>
            <hr />
            <div className="delivery-info__content">
              <p>
                <strong>First Name : </strong> {shipping.firstName}
              </p>

              <p>
                <strong>Last Name : </strong> {shipping.lastName}
              </p>

              <p>
                <strong>Email : </strong> {shipping.email}
              </p>

              <p>
                <strong>Phone Number : </strong> {shipping.phone}
              </p>

              <p>
                <strong>Address : </strong> {shipping.address}
              </p>

              <p>
                <strong>City / Town : </strong> {shipping.city}
              </p>

              <p>
                <strong>State / Country : </strong> {shipping.country}
              </p>

              <p>
                <strong>Zip / postalcode : </strong> {shipping.postalCode}
              </p>

              {shipping.orderNotes && (
                <p>
                  <strong>Order Notes : </strong> {shipping.orderNotes}
                </p>
              )}
            </div>

            <Link route="shipping">
              <a>
                <button
                  className="btn btn-warning btn-lg"
                  style={{ width: "100%" }}
                >
                  Edit Info
                </button>
              </a>
            </Link>
          </div>

          <div className="cart">
            <h4 className="sub-title">Your Order</h4>
            <div className="table-content table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Qty</th>
                    <th>Unit price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProds.length > 0 &&
                    cartProds.map((product) => (
                      <tr key={product._id}>
                        <td>
                          <div className="image-container">
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
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="order-sec">
              <h4>
                Grand Total : <span>$ {total}</span>
              </h4>

              <div>
                <button
                  className="btn btn-warning btn-lg"
                  style={{ textTransform: "uppercase" }}
                  onClick={() => handlePayment()}
                >
                  Order Now &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect />
  );
};

CheckoutComponent.propTypes = {};

export default withRouter(CheckoutComponent);
