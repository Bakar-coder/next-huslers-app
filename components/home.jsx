import React from "react";
import Carousel from "./carousel";
import { Link } from "../routes";
import { withRouter } from "next/router";
import HomeSection from "./partials/home-section";

const Home = ({ products, media, promos, addToCart, router, auth, cart }) => {
  return (
    <div className='page'>
      <header className='slider'>
        <Carousel promos={promos} />
      </header>
      <HomeSection products={products} media={media} />
    </div>
  );
};

export default withRouter(Home);
