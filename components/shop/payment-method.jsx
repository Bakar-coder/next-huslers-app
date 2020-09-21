import React, { useState, useEffect } from "react";
import PaypalButton from "../paypal";
import { connect } from "react-redux";
import { payWithMtnMomo, momoPay } from "../../store/actions";
import { withRouter } from "next/router";
import axios from "axios";

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
  const [currency, setCurrency] = useState({
    ugx: "",
    usd: "",
    eur: "",
  });
  const [state, setState] = useState({
    tab1: true,
    tab2: false,
  });

  const handleMomoPay = () => {
    setNum(true);
  };

  const handleInputChange = (e) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const price = Number(total);
    const eur = Number(currency.eur);
    const totalAmount = eur ? price * eur : price;
    momoPay(shipping, router, number, String(totalAmount), createOrder);
  };

  const { tel } = number;
  const { tab1, tab2 } = state;
  console.log(currency.ugx);
  return (
    <section className='content'>
      <div className='content__head'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='content__title'>Select option</h2>

              <ul
                className='nav nav-tabs content__tabs'
                id='content__tabs'
                role='tablist'
              >
                <li className='nav-item'>
                  <a
                    className={tab1 ? "nav-link active" : "nav-link"}
                    onClick={() =>
                      setState({ ...state, tab1: true, tab2: false })
                    }
                    data-toggle='tab'
                    role='tab'
                    aria-controls='tab-1'
                    aria-selected='true'
                  >
                    PAYPAL
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className={tab2 ? "nav-link active" : "nav-link"}
                    onClick={() =>
                      setState({ ...state, tab1: false, tab2: true })
                    }
                    data-toggle='tab'
                    role='tab'
                    aria-controls='tab-2'
                    aria-selected='false'
                  >
                    MTN MOMO PAY
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {tab1 && (
        <div
          className='price price--premium'
          style={{ maxWidth: "40rem", margin: "4rem auto 0 auto" }}
        >
          <div className='price__item price__item--first'>
            <span>Total Amount</span> <span>${Number(total)}</span>
          </div>
          <a href='#' className='price__btn'>
          <PaypalButton total={total} />
          </a>
        </div>
      )}

      {tab2 && (
        <div
          className='price price--premium'
          style={{ maxWidth: "40rem", margin: "4rem  auto 0 auto " }}
        >
          <div className='price__item price__item--first'>
            <span>Total Amount</span>{" "}
            <span>
              {currency.ugx
                ? Number(total * currency.ugx)
                : Number(total) * 3800}{" "}
              UGX
            </span>
          </div>
          <form onSubmit={handleSubmission} style={{ width: "100%" }}>
            <input
              type='tel'
              className='profile__input'
              placeholder='Enter Mobile money number here...'
              id='tel'
              name='tel'
              value={tel}
              onChange={handleInputChange}
              required
              style={{
                marginTop: "1rem",
                marginBottom: "1rem !mportant",
              }}
            />
            <button type='submit' className='price__btn'>
              Pay with Mtn Momo
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default connect(null, { payWithMtnMomo, momoPay })(withRouter(Payment));
