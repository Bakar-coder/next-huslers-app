import React, { useState } from "react";
import { withRouter } from "next/router";
import Progressbar from "../progress";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMedia = ({ user, add_promo, router }) => {
  if (!user.stuff && !user.member) return (window.location = "/");
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });

  const [state, setState] = useState({
    startDate: new Date(),
  });

  const [file, setFile] = useState("");
  const [fileUploadPercentage, setFileUploadPercentage] = useState(0);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const postPromo = new FormData();
    postPromo.append("file", file);
    postPromo.append("expDate", state.startDate);
    postPromo.append("title", product.title);
    postPromo.append("description", product.description);
    add_promo(postPromo, router, setFileUploadPercentage, fileUploadPercentage);
  };

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const { title, description } = product;

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
                  <h4 className='profile__title'>Add Promotion</h4>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='title'>
                      Title
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='title'
                      id='title'
                      placeholder='Promotion Title'
                      value={title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='releaseDate'>
                      Set Expiration Date
                    </label>
                    <DatePicker
                      selected={state.startDate}
                      onChange={(date) =>
                        setState({ ...state, startDate: date })
                      }
                      className='profile__input'
                      name='releaseDate'
                      id='releaseDate'
                      value={state.startDate}
                    />
                  </div>
                </div>

                <div className='col-12 '>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='file'>
                      Upload Promotion Picture
                    </label>
                    <input
                      type='file'
                      className='profile__textarea'
                      name='file'
                      id='file'
                      onChange={handleFileUpload}
                      required
                    />
                  </div>
                </div>

                <div className='col-12'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='description'>
                      Details
                    </label>
                    <textarea
                      type='text'
                      className='profile__textarea'
                      id='description'
                      name='description'
                      value={description}
                      placeholder='Promotion details...'
                      col='1'
                      row='30'
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className='col-12'>
                  {file && fileUploadPercentage > 0 && (
                    <div className='form-group'>
                      <label className='profile__label'>
                        Uploaded {fileUploadPercentage}%
                      </label>
                      <Progressbar percentage={fileUploadPercentage} />
                    </div>
                  )}
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

export default withRouter(AddMedia);
