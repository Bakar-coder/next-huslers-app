import React, { useState } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { edit_Product } from '../../store/actions'

function EditProduct({ products, edit_Product, router }) {
  const { id } = router.query;
  const [productItem] = id && products && products.filter(prod => prod._id === id)

  const [product, setProduct] = useState({
    id: productItem._id,
    title: productItem.title,
    description: productItem.description,
    category: productItem.category,
    file: productItem.file,
    cover: productItem.cover,
    price: productItem.price,
    featured: productItem.featured,
    published: productItem.published,
  });

  const [file, setFile] = useState(productItem.file);
  const [cover, setCover] = useState(productItem.cover);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("cover", cover);
    formData.append("id", product.id);
    formData.append("title", product.title);
    formData.append("file", product.file);
    formData.append("cover", product.cover);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("featured", product.featured);
    formData.append("published", product.published);
    edit_Product(formData, router);
  };

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    setProduct({ ...product, file: e.target.files[0].name });
  };

  const handleCoverUpload = (e) => {
    setCover(e.target.files[0]);
    setProduct({ ...product, cover: e.target.files[0].name });
  };

  const { title, description, category, price, featured, published } = product;
  return (
    <form onSubmit={handleFormSubmission} className="form">
      <div className="form-title">
        <h3>Edit Product</h3>
        <p className="text-primary">Update Product</p>
      </div>

      <div className="form-group">
        <input
          type="text"
          className={title ? "form-control text-primary" : "form-control"}
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
          required
        />
        <label className="form-label" id="title">
          {title && "Title"}
        </label>
      </div>

      <div className="form-group">
        <input
          type="text"
          className={category ? "form-control text-primary" : "form-control"}
          id="category"
          name="category"
          value={category}
          onChange={handleInputChange}
          required
        />
        <label className="form-label" id="category">
          {category && "Category"}
        </label>
      </div>

      <div className="form-group">
        <input
          type="file"
          name="file"
          className="form-control"
          onChange={handleFileUpload}
        />
      </div>

      <div className="form-group">
        <input
          type="file"
          className="form-control"
          name="cover"
          onChange={handleCoverUpload}
        />
      </div>

      <div className="form-group">
        <textarea
          type="text"
          className={description ? "form-control text-primary" : "form-control"}
          id="description"
          name="description"
          value={description}
          col="4"
          row="30"
          onChange={handleInputChange}
          required
        ></textarea>
        <label className="form-label" id="description">
          {description && "Description"}
        </label>
      </div>

      <div className="form-group">
        <input
          type="text"
          className={price ? "form-control text-primary" : "form-control"}
          id="price"
          name="price"
          value={price}
          onChange={handleInputChange}
          required
        />
        <label className="form-label" id="price">
          {price && "Price"}
        </label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          id="customRadio3"
          name="customRadio"
          class="custom-control-input"
          disabled=""
        />
        <label class="custom-control-label" for="customCheck1">
          Featured
        </label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          id="customRadio3"
          name="customRadio"
          class="custom-control-input"
          disabled=""
        />
        <label class="custom-control-label" for="customCheck1">
          Published
        </label>
      </div>

      <button type="submit" className="btn btn-primary form-btn">
        Save
      </button>
    </form>
  );
}

const mapState = ({ products }) => ({ products: products.products })

export default connect(mapState, { edit_Product })(withRouter(EditProduct));
