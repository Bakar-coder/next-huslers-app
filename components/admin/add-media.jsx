import React, { useState } from "react";
import { withRouter } from "next/router";
import Progressbar from "../progress";

const AddMedia = ({ add_Product, router }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    fileType: "",
    artist: "",
    genre: "",
    releaseDate: "",
  });

  const [file, setFile] = useState("");
  const [cover, setCover] = useState("");
  const [coverUploadPercentage, setCoverUploadPercentage] = useState(0);
  const [fileUploadPercentage, setFileUploadPercentage] = useState(0);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const postProduct = new FormData();
    postProduct.append("file", file);
    postProduct.append("cover", cover);
    postProduct.append("title", product.title);
    postProduct.append("description", product.description);
    postProduct.append("price", product.price);
    postProduct.append("category", product.category);
    postProduct.append("fileType", product.fileType);
    add_Product(
      postProduct,
      router,
      setFileUploadPercentage,
      setCoverUploadPercentage,
      fileUploadPercentage,
      coverUploadPercentage
    );
  };

  const [featured, setFeatured] = useState(true);
  const [published, setPublished] = useState(true);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCoverUpload = (e) => {
    setCover(e.target.files[0]);
  };

  const {
    title,
    artist,
    genre,
    releaseDate,
    description,
    category,
    fileType,
  } = product;

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
                  <h4 className='profile__title'>Add Audio Or Video</h4>
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
                      value={title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='artist'>
                      Artist
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='artist'
                      id='artist'
                      value={artist}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='genre'>
                      Genre
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='genre'
                      id='genre'
                      value={genre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='releaseDate'>
                      Release Date
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='releaseDate'
                      id='releaseDate'
                      value={releaseDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='file'>
                      File Upload
                    </label>
                    <input
                      type='file'
                      className='profile__textarea'
                      name='file'
                      id='file'
                      value={file}
                      onChange={handleFileUpload}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='cover'>
                      File Upload Cover
                    </label>
                    <input
                      type='file'
                      className='profile__textarea'
                      name='cover'
                      id='cover'
                      value={cover}
                      onChange={handleCoverUpload}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='fileType'>
                      File Upload Type
                    </label>
                    <select
                      class='custom-select profile__textarea'
                      name='fileType'
                      id='fileType'
                      value={fileType}
                      onChange={handleInputChange}
                      required
                    >
                      <option selected=''> Select File Upload Type</option>
                      <option value='aud'>Audio</option>
                      <option value='vid'>Video</option>
                    </select>
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='category'>
                      Category
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='category'
                      id='category'
                      value={category}
                      onChange={handleInputChange}
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

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='sign__group sign__group--checkbox'>
                    <input
                      id='featured'
                      name='featured'
                      type='checkbox'
                      name='featured'
                      value={featured}
                      onClick={() => setFeatured(!featured)}
                      checked={featured && "checked"}
                    />
                    <label for='featured'>Set Featured</label>
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='sign__group sign__group--checkbox'>
                    <input
                      id='published'
                      name='published'
                      type='checkbox'
                      name='published'
                      value={published}
                      onClick={() => setPublished(!published)}
                      checked={published && "checked"}
                    />
                    <label for='published'>Set Published</label>
                  </div>
                </div>

                {file && cover && fileUploadPercentage > 0 && (
                  <div className='form-group'>
                    <p className='text-warning'>
                      Uploaded {fileUploadPercentage}%
                    </p>
                    <Progressbar percentage={fileUploadPercentage} />
                  </div>
                )}

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
