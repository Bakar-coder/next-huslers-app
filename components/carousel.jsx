import React, { Fragment } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    animation='fallAnimation'
    play={true}
    cancelOnInteraction={false}
    interval={6000}
  >
    <div data-src='/assets/images/slider/media-1.jpg' />
    <div data-src='/assets/images/slider/media-2.jpg' />
    <div data-src='/assets/images/slider/media-3.jpg' />
    <div data-src='/assets/images/slider/media-4.jpg' />
    <div data-src='/assets/images/slider/media-5.jpg' />
  </AutoplaySlider>
);

export default () => <Fragment>{slider}</Fragment>;
