import React, { useState } from "react";
import { withRouter } from "next/router";
import Progressbar from "../progress";

const AddProduct = ({ add_Product, router }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const [file, setFile] = useState("");
  const [fileUploadPercentage, setFileUploadPercentage] = useState(0);
  const [featured, setFeatured] = useState(true);
  const [published, setPublished] = useState(true);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const postProduct = new FormData();
    postProduct.append("file", file);
    postProduct.append("title", product.title);
    postProduct.append("description", product.description);
    postProduct.append("price", product.price);
    postProduct.append("category", product.category);
    postProduct.append("stock", product.stock);
    postProduct.append("featured", featured);
    postProduct.append("published", published);
    add_Product(
      postProduct,
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

  const { title, description, price, category, stock } = product;

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
                  <h4 className='profile__title'>Add Product</h4>
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
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='stock'>
                      Number in Stock
                    </label>
                    <input
                      type='text'
                      className='profile__input'
                      name='stock'
                      id='stock'
                      value={stock}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
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

                <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                  <div className='profile__group'>
                    <label className='profile__label' htmlFor='price'>
                      Price
                    </label>
                    <input
                      type='number'
                      className='profile__input'
                      name='price'
                      id='price'
                      value={price}
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
                      defaultChecked
                    />
                    <label htmlFor='featured'>Featured</label>
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
                      defaultChecked
                    />
                    <label htmlFor='published'>Published</label>
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
                    Add Product
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
