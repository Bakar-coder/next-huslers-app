import React, { useEffect } from "react";
import axios from "axios";
import { SET_PRODUCTS, SET_MEDIA } from "../store/types";
import Home from "../components/home";
import { connect } from "react-redux";
import { deleteProduct, setLoaded, addToCart } from "../store/actions";

const Index = ({
  products,
  media,
  pageLoading,
  setLoaded,
  addToCart,
  auth,
  cart,
}) => {
  useEffect(() => {
    if (pageLoading) setLoaded();
  }, [setLoaded]);
  return pageLoading ? (
    <div className='center' style={{ minHeight: "88vh" }}>
      <img src='/assets/images/Preloader_2.gif' />
    </div>
  ) : (
    <div className='wrapper'>
      <Home
        products={products}
        addToCart={addToCart}
        auth={auth}
        cart={cart}
        media={media}
      />
    </div>
  );
};

Index.getInitialProps = async ({ store }) => {
  try {
    const url = `${process.env.BASE_URL}/api/products`;
    const mediaUrl = `${process.env.BASE_URL}/api/media`;
    const { dispatch } = store;
    const { data } = await axios.get(url);
    const mediaData = await axios.get(mediaUrl);
    if (mediaData.data)
      dispatch({ type: SET_MEDIA, payload: mediaData.data.media });

    if (data.products.length > 0) {
      const products = data.products;
      dispatch({ type: SET_PRODUCTS, payload: products });
      return { ...products };
    }
  } catch (ex) {
    console.log(ex);
  }
};

const mapState = ({ auth, products, loading, media }) => ({
  auth: auth.isAuthenticated,
  cart: products.cart,
  products: products.products,
  pageLoading: loading.loading,
  media: media.media,
});

export default connect(mapState, { deleteProduct, setLoaded, addToCart })(
  Index
);
