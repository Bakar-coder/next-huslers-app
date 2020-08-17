import React, { useState } from "react";
import { withRouter } from "next/router";

const ShippingAddress = ({ setShipping, user, router, shipping }) => {
  const [state, setState] = useState({
    firstName: shipping
      ? shipping.firstName
      : user.firstName
      ? user.firstName
      : "",
    lastName: shipping ? shipping.lastName : user.lastName ? user.lastName : "",
    email: shipping ? shipping.email : user.email ? user.email : "",
    orderNotes: shipping ? shipping.orderNotes : "",
    phone: shipping ? shipping.phone : "",
    city: shipping ? shipping.city : "",
    address: shipping ? shipping.address : "",
    postalCode: shipping ? shipping.postalCode : "",
    country: shipping ? shipping.country : "",
  });

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setShipping(state);
    router.push("/checkout");
  };

  const {
    address,
    firstName,
    lastName,
    postalCode,
    country,
    email,
    phone,
    orderNotes,
    city,
  } = state;
  return (
    <form onSubmit={handleFormSubmission} className="form">
      <div className="form-header">
        <h2>BILLING DETAILS</h2>
        <p>Enter your billing details to continue.</p>
      </div>

      <div className="row">
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleInputChange}
              required
              placeholder="First Name"
            />
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleInputChange}
              required
              placeholder="Last Name"
            />
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              required
              placeholder="Email"
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              value={phone}
              onChange={handleInputChange}
              required
              placeholder="Phone number"
            />
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="address"
          id="address"
          value={address}
          onChange={handleInputChange}
          required
          placeholder="Address"
        />
        <label htmlFor="address" className="form-label">
          Address
        </label>
      </div>

      <div className="row">
        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="postalCode"
              id="postalCode"
              value={postalCode}
              onChange={handleInputChange}
              required
              placeholder="Zip / Postal Code"
            />
            <label htmlFor="postalCode" className="form-label">
              Zip / Postal Code
            </label>
          </div>
        </div>

        <div className="col col-lg-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="country"
              id="country"
              value={country}
              onChange={handleInputChange}
              required
              placeholder="State / Country"
            />
            <label htmlFor="country" className="form-label">
              State / Country
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="city"
          id="city"
          value={city}
          onChange={handleInputChange}
          required
          placeholder="Town / City"
        />
        <label htmlFor="city" className="form-label">
          Town / City
        </label>
      </div>

      <div className="form-group">
        <textarea
          type="text"
          className="form-control"
          id="orderNotes"
          name="orderNotes"
          value={orderNotes}
          col="4"
          row="30"
          onChange={handleInputChange}
          placeholder="Order Notes - Optional"
        />
        <label className="form-label" id="orderNotes">
          {orderNotes && "Order Notes "}
        </label>
      </div>

      <div className="form-footer">
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default withRouter(ShippingAddress);
