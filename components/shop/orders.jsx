import React from "react";
import { Link } from "../../routes";

const OrdersComponent = ({ orders, deleteOrder }) => {
  return (
    <div className="cart" style={{ textAlign: "center" }}>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id} className="table-content table-responsive">
            <h4 style={{ margin: "1.5rem 0", textAlign: "left" }}>
              {" "}
              Order ID: #-{order._id}{" "}
              <span
                onClick={() => deleteOrder(order._id)}
                className=" badge btn-sm btn-danger"
              >
                X
              </span>
            </h4>

            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Sub-Total</th>
                </tr>
              </thead>
              {order.products.map((prod) => (
                <tbody key={prod._id}>
                  <td>{prod.product._id}</td>
                  <td>{prod.product.title}</td>
                  <td>{prod.quantity}</td>
                  <td>{prod.product.price}</td>
                  <td>{Number(prod.product.price * prod.quantity)}</td>
                </tbody>
              ))}
            </table>
          </div>
        ))
      ) : (
        <div>
          <p>You haven't submitted any order yet!</p>
          <Link route="products">
            <button
              className="btn btn-warning btn-lg"
              style={{ textTransform: "uppercase", marginTop: "4rem" }}
            >
              Start Shopping &rarr;
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrdersComponent;
