import React, { Fragment, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { indexOf } from "lodash";

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Carousel = ({ promos }) => {
  let slider;
  const curDate = Date.now();
  

  const animations = ['fallAnimation', 'cubeAnimation']
  

  if (promos && promos.length > 0)
    slider = (
      <AutoplaySlider
        animation={'cubeAnimation'}
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        {promos.map((promo) => (
          <div
            key={promo._id}
            data-src={`${process.env.BASE_URL}/${promo.file}`}
          />
        ))}
      </AutoplaySlider>
    );

  return <Fragment>{slider}</Fragment>;
};

export default Carousel;
