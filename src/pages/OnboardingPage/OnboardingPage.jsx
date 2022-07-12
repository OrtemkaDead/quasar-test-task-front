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
  const swiperEl = useRef(null);

  return (
    <PageLayout
      classNameHeader={"onboarding__header"}
      headerSlot={
        <Button
          onClick={() =>
            swiperEl.current.swiper.slideTo(
              swiperEl.current.swiper.slides.length - 1
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
              swiperEl={swiperEl}
              setIsLastSlide={setIsLastSlide}
            />
          </div>

          <Button
            type={BTN__BIG}
            onClick={() =>
              swiperEl.current.swiper.slideTo(
                swiperEl.current.swiper.activeIndex + 1
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
