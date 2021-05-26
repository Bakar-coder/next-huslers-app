import React from "react";

function Order({ orders }) {
  console.log(orders);
  return (
    <React.Fragment>
      {orders && orders.length === 0 ? (
        <div className="cart">
          <p style={{ textAlign: "center" }}>No order submitted yet.</p>
        </div>
      ) : (
        <div className="cart">
          <div className="table-content table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Products</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>

                      <td>
                        {order.products.map((product) => (
                          <ul key={product.id} className="text-left">
                            <li>{product.title}</li>
                          </ul>
                        ))}
                      </td>

                      <td>
                        {order.products.map((product) => (
                          <ul key={product.id}>
                            <li>{product.orderItem.quantity}</li>
                          </ul>
                        ))}
                      </td>

                      <td>
                        {order.products.map((product) => (
                          <ul key={product.id}>
                            <li>{product.price}</li>
                          </ul>
                        ))}
                      </td>

                      <td>
                        {order.products.map((product) => (
                          <ul key={product.id}>
                            <li>
                              {(
                                product.price * product.orderItem.quantity
                              ).toFixed(2)}
                            </li>
                          </ul>
                        ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Order;
