import React, { useState } from "react";
import PaypalButton from "../paypal";
import { connect } from "react-redux";
import { payWithMtnMomo, momoPay } from "../../store/actions";
import { withRouter } from "next/router";

const Payment = ({
  total,
  momoPay,
  payWithMtnMomo,
  createOrder,
  shipping,
  router,
}) => {
  const [number, setNumber] = useState({ tel: "" });
  const [num, setNum] = useState(false);

  const handleMomoPay = () => {
    setNum(true);
  };

  const handleInputChange = (e) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    // payWithMtnMomo(number, Number(total));
    momoPay(shipping, router, number, total, createOrder);
  };

  const { tel } = number;
  return (
    <div>
      <div
        className="cart"
        style={{
          maxWidth: "52rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h4 lassName="sub-title">SELECT PAYMENT METHOD</h4>
        <br />

        {!num && (
          <div
            style={{
              background: "white",
              maxWidth: "40rem",
              padding: "2rem 3rem",
            }}
          >
            <PaypalButton total={Number(total)} />
          </div>
        )}

        <img
          src="/assets/images/button-mtn.png"
          onClick={() => handleMomoPay()}
          style={{
            marginTop: "1rem",
            minWidth: "21rem",
            width: "21rem",

            cursor: "pointer",
          }}
        />

        {num && (
          <form style={{ textAlign: "center" }} onSubmit={handleSubmission}>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile money number"
                id="tel"
                name="tel"
                value={tel}
                onChange={handleInputChange}
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem !mportant",
                  width: "21rem",
                }}
              />
            </div>
            <button type="submit" className="button">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default connect(null, { payWithMtnMomo, momoPay })(withRouter(Payment));
