import React, { Fragment } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = ({ promos }) => {
  let slider;
  const curDate = Date.now();

  if (promos && promos.length > 0)
    slider = (
      <AutoplaySlider
        animation='fallAnimation'
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
