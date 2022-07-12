import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Components
import PageLayout from "@Layouts/PageLayout";
import Button, { BTN__BIG } from "@Components/Button";
import OnboardingSwiper from "@Components/OnboardingSwiper";

// Styles
import "./OnboardingPage.scss";

const OnboardingPage = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiperRef = useRef(null);

  return (
    <PageLayout
      classNameHeader={"onboarding__header"}
      headerSlot={
        <Button
          onClick={() =>
            swiperRef.current.swiper.slideTo(
              swiperRef.current.swiper.slides.length - 1
            )
          }
        >
          {isLastSlide ? "" : "Пропустить"}
        </Button>
      }
      contentSlot={
        <div className="onboarding__content">
          <div className="onboarding__swiper-wrap">
            <OnboardingSwiper
              swiperRef={swiperRef}
              setIsLastSlide={setIsLastSlide}
            />
          </div>

          <Button
            type={BTN__BIG}
            onClick={() =>
              swiperRef.current.swiper.slideTo(
                swiperRef.current.swiper.activeIndex + 1
              )
            }
          >
            {isLastSlide ? (
              <Link to="/auth">Начать пользоваться</Link>
            ) : (
              "Продолжить"
            )}
          </Button>
        </div>
      }
    />
  );
};

export default OnboardingPage;
