import React from "react";

// Styles
import "./OnboardingSwiper.scss";

// Images
import image1 from "../../images/image-1.png";
import image2 from "../../images/image-2.png";
import image3 from "../../images/image-3.png";
import image4 from "../../images/image-4.png";

// Components
import OnboardingContent from "../OnboardingContent";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OnboardingSwiper = ({ setIsLastSlide }) => {
  return (
    <Swiper
      className="onboarding__swiper"
      // install Swiper modules
      modules={[Pagination, A11y]}
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
