import React from "react";
import redirect from "nextjs-redirect";
import { withRouter } from "next/router";

const ProductDetails = ({ products, router, auth, addToCart }) => {
  const { slug } = router.query;

  let product =
    slug && products && products.filter((prod) => prod.title === slug);
  if (products) product = product[0];

  console.log(product);
  const Redirect = redirect("/");
  const mediaPath = product && `${process.env.BASE_URL}/${product.file}`;
  const mediaCover = product && `${process.env.BASE_URL}/${product.cover}`;

  const fileType = product && product.file.split(".")[1];
  return product ? (
    <main className="product-details">
      <div className="col img-container">
        {fileType === "mp3" ? (
          <video
            id="player"
            playsinline
            controls
            poster={mediaCover ? mediaCover : mediaPath}
          >
            <source src={mediaPath} type="audio/mp3" />
            <source src={mediaPath} type="audio/ogg" />
          </video>
        ) : (
          <video
            id="player"
            playsinline
            controls
            poster={mediaCover ? mediaCover : mediaPath}
          >
            <source src={mediaPath} type="video/mp4" />
            <source src={mediaPath} type="video/webm" />
            <source src={mediaPath} type="video/mkv" />
            <source src={mediaPath} type="video/x-matroska" />
            <track
              kind="captions"
              label="English captions"
              src="/path/to/captions.vtt"
              srclang="en"
              default
            />
          </video>
        )}
      </div>
      <div className="col">
        <h3> {product.title} </h3>
        <p> {product.description} </p>
        <h4> Price: $ {product.price}</h4>
        <button
          className="button"
          onClick={() => addToCart(product, router, auth)}
        >
          Add to Cart
        </button>
      </div>
    </main>
  ) : (
    <Redirect />
  );
};

export default withRouter(ProductDetails);
