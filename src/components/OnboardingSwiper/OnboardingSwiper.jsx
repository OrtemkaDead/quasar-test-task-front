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
import { Pagination, A11y } from "swiper";
// import { EffectFade } from "swiper";

// Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
// import "swiper/scss/effect-fade";

const OnboardingSwiper = ({ swiperEl, setIsLastSlide }) => {
  return (
    <Swiper
      className="onboarding__swiper"
      ref={swiperEl}
      // install Swiper modules
      modules={[Pagination, A11y]}
      // effect="fade"
      spaceBetween={100}
      slidesPerView={1}
      pagination
      // allowTouchMove={false}
      onActiveIndexChange={(wriper) =>
        wriper.activeIndex === wriper.slides.length - 1
          ? setIsLastSlide(true)
          : setIsLastSlide(false)
      }
    >
      <SwiperSlide>
        <OnboardingContent imageUrl={image1}>
          Авторизируйтесь и создавайте профили для своих близких, настраивая
          уровень заботы
        </OnboardingContent>
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingContent imageUrl={image2}>
          Добавляйте препараты, выбирайте нужную дозировку и планируйте прием
          лекарств
        </OnboardingContent>
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingContent imageUrl={image3}>
          Заходите в отчеты, чтобы отслеживать регулярность и делиться историей
          приема препаратов с врачами
        </OnboardingContent>
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingContent imageUrl={image4}>
          Добавляйте больше профилей и подключайте автоматические звонки с
          премиум подпиской
        </OnboardingContent>
      </SwiperSlide>
    </Swiper>
  );
};

export default OnboardingSwiper;
