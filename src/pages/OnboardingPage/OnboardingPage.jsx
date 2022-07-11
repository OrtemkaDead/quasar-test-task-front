import React, { useState } from "react";
import { useSwiper } from "swiper/react";

// Components
import PageLayout from "../../layouts/PageLayout";
import Button, { BTN__BIG } from "../../components/Button";
import OnboardingSwiper from "../../components/OnboardingSwiper";

// Styles
import "./OnboardingPage.scss";

const OnboardingPage = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiper = useSwiper();

  return (
    <PageLayout
      classNameHeader={"onboarding__header"}
      headerSlot={
        <Button onClick={() => console.log("skip")}>
          {isLastSlide ? "" : "Пропустить"}
        </Button>
      }
      contentSlot={
        <div className="onboarding__content">
          <div className="onboarding__swiper-wrap">
            <OnboardingSwiper setIsLastSlide={setIsLastSlide} />
          </div>

          <Button type={BTN__BIG} onClick={() => console.log("next")}>
            {isLastSlide ? "Начать пользоваться" : "Продолжить"}
          </Button>
        </div>
      }
    />
  );
};

export default OnboardingPage;
