import React, { useState } from "react";

// Styles
import "./StartSwiper.scss";

// Components
import StartContent from "../StartContent";
import SwiperButtonNext from "../SwiperButtonNext";
import SwiperButtonSkip from "../SwiperButtonSkip";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const StartSwiper = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <div className="container">
      <Swiper
        className="start__swiper"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination
        allowTouchMove={false}
        onReachEnd={() => setIsLastSlide(true)}
        // onActiveIndexChange={(swiper) => {
        //   if (swiper.activeIndex === swiper.slides.length) setIsLastSlide(true);
        // }}
      >
        <SwiperButtonSkip slot="container-start">
          {isLastSlide ? "" : "Пропустить"}
        </SwiperButtonSkip>

        <SwiperSlide>
          <StartContent />
        </SwiperSlide>
        <SwiperSlide>
          <StartContent />
        </SwiperSlide>
        <SwiperSlide>
          <StartContent />
        </SwiperSlide>
        <SwiperSlide>
          <StartContent />
        </SwiperSlide>

        <SwiperButtonNext>
          {isLastSlide ? "Начать пользоваться" : "Продолжить"}
        </SwiperButtonNext>
      </Swiper>
    </div>
  );
};

export default StartSwiper;
