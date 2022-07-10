import React from "react";
import { useSwiper } from "swiper/react";

import "./SwiperButtonNext.scss";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="swiper__button-next" onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

export default SwiperButtonNext;
