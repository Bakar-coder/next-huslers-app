import React, { useState } from "react";
import { useRouter } from "next/router";
import Country from "../country";

const ShippingAddress = ({ setShipping, user, shipping }) => {
  const router = new useRouter();
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
    setShipping(state, router);
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
    <div className='content'>
      <div className='container'>
        <div className='tab-content'>
          <div className='tab-pane fade show active'>
            <form
              onSubmit={handleFormSubmission}
              className='profile__form'
              style={{ maxWidth: "50rem", margin: "auto" }}
            >
              <div className='row'>
                <div className='col-12'>
                  <h4 className='profile__title'>Billing details</h4>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='firstName'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='firstName'
                      id='firstName'
                      value={firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='lastName'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='lastName'
                      id='lastName'
                      value={lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='profile__input'
                      name='email'
                      id='email'
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='phone'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      className='profile__input'
                      name='phone'
                      id='phone'
                      value={phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='address'>
                      Address
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='address'
                      id='address'
                      value={address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='postalCode'>
                      Zip / Postal Code
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='postalCode'
                      id='postalCode'
                      value={postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' for='country'>
                      Country / State
                    </label>
                    <Country
                      country={country}
                      inPutChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='city'>
                      Town / City
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='city'
                      id='city'
                      value={city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='orderNotes'>
                      Order Notes - Optional
                    </label>
                    <textarea
                      type='text'
                      className='profile__textarea'
                      id='orderNotes'
                      name='orderNotes'
                      value={orderNotes}
                      col='1'
                      row='30'
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className='col-12'>
                  <button className='profile__btn' type='submit'>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
