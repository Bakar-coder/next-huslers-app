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
    <div className='container'>
      <div className='row my-4'>
        <div className='col-12 col-md-6'>
          <div className='delivery-info'>
            <h4 className='faq__title'>BILLING Info.</h4>

            <div className='delivery-info__content'>
              <p className='faq__text'>
                <strong>First Name : </strong> {shipping.firstName}
              </p>

              <p className='faq__text'>
                <strong>Last Name : </strong> {shipping.lastName}
              </p>

              <p className='faq__text'>
                <strong>Email : </strong> {shipping.email}
              </p>

              <p className='faq__text'>
                <strong>Phone Number : </strong> {shipping.phone}
              </p>

              <p className='faq__text'>
                <strong>Address : </strong> {shipping.address}
              </p>

              <p className='faq__text'>
                <strong>City / Town : </strong> {shipping.city}
              </p>

              <p className='faq__text'>
                <strong>State / Country : </strong> {shipping.country}
              </p>

              <p className='faq__text'>
                <strong>Zip / postalcode : </strong> {shipping.postalCode}
              </p>

              {shipping.orderNotes && (
                <p className='faq__text'>
                  <strong>Order Notes : </strong> {shipping.orderNotes}
                </p>
              )}
            </div>

            <Link route='shipping'>
              <a>
                <button className='btn btn-warning btn-lg'>Edit Info</button>
              </a>
            </Link>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='dashbox'>
            <div className='dashbox__title'>
              <h3>
                <i className='icon ion-ios-cart'></i> Order items
              </h3>
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
                                  src={`${process.env.BASE_URL}/${product.cover}`}
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
                  <Link route='/payment'>
                    <a>
                      <button
                        className='btn btn-warning btn-lg'
                        style={{ textTransform: "uppercase" }}
                      >
                        Order Now
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
      </div>
    </div>
  ) : (
    <Redirect />
  );
};

CheckoutComponent.propTypes = {};

export default withRouter(CheckoutComponent);
