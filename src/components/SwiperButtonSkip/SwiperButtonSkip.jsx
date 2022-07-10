import React from "react";
import { useSwiper } from "swiper/react";

import "./SwiperButtonSkip.scss";

const SwiperButtonSkip = ({ children }) => {
  const swiper = useSwiper();

  return (
    <div className="swiper__button-skip" onClick={() => swiper.slideTo(3)}>
      {children}
    </div>
  );
};

export default SwiperButtonSkip;
