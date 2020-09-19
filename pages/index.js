import React, { useEffect } from "react";
import axios from "axios";
import {
  SET_PRODUCTS,
  SET_MEDIA,
  GET_PROMOS,
  SET_EVENTS, SET_PHOTOS
} from "../store/types";
import Home from "../components/home";
import { connect } from "react-redux";
import { deleteProduct, setLoaded, addToCart } from "../store/actions";

const Index = ({
  products,
  media,
  promos,
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
        promos={promos}
      />
    </div>
  );
};

Index.getInitialProps = async ({ store }) => {
  try {
    const url = `${process.env.BASE_URL}/api/products`;
    const eventsUrl = `${process.env.BASE_URL}/api/events`;
    const mediaUrl = `${process.env.BASE_URL}/api/media`;
    const galleryUrl = `${process.env.BASE_URL}/api/photos`;
    const promoUrl = `${process.env.BASE_URL}/api/media/promos`;
    const { dispatch } = store;
    const { data } = await axios.get(url);
    const eventsData = await axios.get(eventsUrl);
    const mediaData = await axios.get(mediaUrl);
    const promoData = await axios.get(promoUrl);
    const galleryData = await axios.get(galleryUrl);

    if (mediaData.data)
      dispatch({ type: SET_MEDIA, payload: mediaData.data.media });

    if (galleryData.data)
      dispatch({ type: SET_PHOTOS, payload: galleryData.data.photos });

    if (eventsData.data)
      dispatch({ type: SET_EVENTS, payload: eventsData.data.events });

    if (promoData.data)
      dispatch({ type: GET_PROMOS, payload: promoData.data.promo });

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
  promos: media.promos,
});

export default connect(mapState, { deleteProduct, setLoaded, addToCart })(
  Index
);
