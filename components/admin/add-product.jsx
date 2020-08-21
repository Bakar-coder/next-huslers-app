import React, { useState } from "react";
import { withRouter } from "next/router";
import Progressbar from "../progress";

const AddProduct = ({ add_Product, router }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
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
    add_Product(
      postProduct,
      router,
      setFileUploadPercentage,
      setCoverUploadPercentage,
      fileUploadPercentage,
      coverUploadPercentage
    );
  };

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCoverUpload = (e) => {
    setCover(e.target.files[0]);
  };

  const { title, description, price, category } = product;

  return (
    <form onSubmit={handleFormSubmission} className='form'>
      <div className='form-title'>
        <h3>Add A Product</h3>
        <p className='text-warning'>Create a Product</p>
      </div>

      <div className='form-group'>
        <input
          type='text'
          className={title ? "form-control text-warning" : "form-control"}
          id='title'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
          placeholder='Title'
        />
        <label className='form-label' id='title'>
          {title && "Title"}
        </label>
      </div>

      <div className='form-group'>
        <input
          type='text'
          className={category ? "form-control text-warning" : "form-control"}
          id='category'
          name='category'
          value={category}
          onChange={handleInputChange}
          required
          placeholder='Category'
        />
        <label className='form-label' id='category'>
          {category && "Category"}
        </label>
      </div>

      <div className='form-group'>
        <input
          type='file'
          className='form-control'
          onChange={handleFileUpload}
          name='file'
          required
          placeholder='Upload file'
        />
      </div>

      <div className='form-group'>
        <input
          type='file'
          className='form-control'
          onChange={handleCoverUpload}
          name='cover'
          required
          placeholder='Upload file'
        />
      </div>

      <div className='form-group'>
        <textarea
          type='text'
          className={description ? "form-control text-warning" : "form-control"}
          id='description'
          name='description'
          value={description}
          col='4'
          row='30'
          onChange={handleInputChange}
          required
          placeholder='Description'
        />
        <label className='form-label' id='description'>
          {description && "Description"}
        </label>
      </div>

      <div className='form-group'>
        <input
          type='text'
          className={price ? "form-control text-warning" : "form-control"}
          id='price'
          name='price'
          value={price}
          onChange={handleInputChange}
          required
          placeholder='Price'
        />
        <label className='form-label' id='price'>
          {price && "Price"}
        </label>
      </div>

      {file && cover && fileUploadPercentage > 0 && (
        <div className='form-group'>
          <p className='text-warning'>Uploaded {fileUploadPercentage}%</p>
          <Progressbar percentage={fileUploadPercentage} />
        </div>
      )}

      <button
        type='submit'
        className='button'
        disabled={
          coverUploadPercentage > 0 || fileUploadPercentage > 0 ? true : false
        }
      >
        Add Product
      </button>
    </form>
  );
};

export default withRouter(AddProduct);
