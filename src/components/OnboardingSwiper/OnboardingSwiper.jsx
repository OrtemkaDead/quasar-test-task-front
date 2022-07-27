import React from "react";

// Styles
import "./OnboardingSwiper.scss";

// Images
import image1 from "@Assets/images/image-1.png";
import image2 from "@Assets/images/image-2.png";
import image3 from "@Assets/images/image-3.png";
import image4 from "@Assets/images/image-4.png";

// Components
import OnboardingContent from "@Components/OnboardingContent";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, EffectFade } from "swiper";

// Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

const OnboardingSwiper = ({ swiperRef, setIsLastSlide }) => {
  const slides = [
    {
      id: 0,
      imageSrc: image1,
      text: "Авторизируйтесь и создавайте профили для своих близких, настраивая уровень заботы",
    },
    {
      id: 1,
      imageSrc: image2,
      text: "Добавляйте препараты, выбирайте нужную дозировку и планируйте прием лекарств",
    },
    {
      id: 2,
      imageSrc: image3,
      text: "Заходите в отчеты, чтобы отслеживать регулярность приема и делиться историей с врачами",
    },
    {
      id: 3,
      imageSrc: image4,
      text: "Добавляйте больше профилей и подключайте автоматические звонки с премиум подпиской",
    },
  ];

  return (
    <Swiper
      className="onboarding__swiper"
      ref={swiperRef}
      // install Swiper modules
      modules={[Pagination, A11y, EffectFade]}
      effect="fade"
      slidesPerView={1}
      pagination
      // allowTouchMove={false}
      onActiveIndexChange={(wriper) =>
        wriper.activeIndex === wriper.slides.length - 1
          ? setIsLastSlide(true)
          : setIsLastSlide(false)
      }
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <OnboardingContent text={slide.text} imageSrc={slide.imageSrc} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OnboardingSwiper;
