/* eslint-disable no-tabs */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import CreditCards from '../../public/images/credit-cards.svg';
import active from '../../public/images/icons/active.svg';
import iconsMountain from '../../public/images/icons/icons-mountain.svg';
import Cart from '../../public/images/icons/cart.svg';
import Car from '../../public/images/icons/car.svg';

const ImgSvgBike = () => (
  <svg id="svg-motor" viewBox="0 0 2160 2160" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
    <g id="Saly-3">
      <rect id="Saly-3_2" fill="url(#pattern0)" />
    </g>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0" transform="scale(0.000462963)" />
      </pattern>
    </defs>
  </svg>
);

const TornadoSvg = () => (
  <svg id="svg-tornado" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
    <g id="Tornado">
      <rect id="Tornado_2" fill="url(#pattern1)" />
    </g>
    <defs>
      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image1" transform="scale(0.000925926)" />
      </pattern>
    </defs>
  </svg>
);

const SnowWindy = () => (
  <svg id="svg-snowWindy" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
    <rect id="Mid-snow-fast-winds" y="-5e-08" fill="url(#pattern2)" />
    <defs>
      <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image2" transform="scale(0.000925926)" />
      </pattern>
    </defs>
  </svg>
);

export {
  ImgSvgBike,
  TornadoSvg,
  SnowWindy,
  CreditCards,
  active,
  iconsMountain,
  Cart,
  Car,
};