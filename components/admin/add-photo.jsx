import React, { useState } from "react";
import { withRouter } from "next/router";
import Progressbar from "../progress";

const AddProduct = ({ add_image, router }) => {
  const [product, setProduct] = useState({
    title: "",
    description: ""
  });

  const [file, setFile] = useState("");
  const [fileUploadPercentage, setFileUploadPercentage] = useState(0);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const postImage = new FormData();
    postImage.append("file", file);
    postImage.append("title", product.title);
    postImage.append("description", product.description);
   
    add_image(
      postImage,
      router,
      setFileUploadPercentage,
      fileUploadPercentage
    );
  };

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const { title, description} = product;

  return (
    <div className='content'>
      <div className='container'>
        <div className='tab-content'>
          <div className='tab-pane fade show active'>
            <form
              onSubmit={handleFormSubmission}
              className='profile__form'
              style={{ maxWidth: "80rem", margin: "auto" }}
            >
              <div className='row'>
                <div className='col-12'>
                  <h4 className='profile__title'>Add Photo</h4>
                </div>

                <div className='col-12 '>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='title'>
                      Title
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='title'
                      id='title'
                      value={title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

               

                <div className='col-12 '>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='file'>
                      Image
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
                      Description
                    </label>
                    <textarea
                      type='text'
                      className='profile__textarea'
                      id='description'
                      name='description'
                      value={description}
                      col='1'
                      row='30'
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

               

                {file && fileUploadPercentage > 0 && (
                  <div className='form-group'>
                    <p className='text-warning'>
                      Uploaded {fileUploadPercentage}%
                    </p>
                    <Progressbar percentage={fileUploadPercentage} />
                  </div>
                )}

                <div className='col-12'>
                  <button className='profile__btn' type='submit'>
                    Add Photo
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

export default withRouter(AddProduct);
