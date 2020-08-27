import React from "react";
import Carousel from "./carousel";
import { Link } from "../routes";
import { withRouter } from "next/router";
import HomeSection from "./partials/home-section";

const Home = ({ products, addToCart, router, auth, cart }) => {
  return (
    <div className='page'>
      <header className='slider'>
        <Carousel />
      </header>
      <HomeSection products={products} />
    </div>
  );
};

export default withRouter(Home);
