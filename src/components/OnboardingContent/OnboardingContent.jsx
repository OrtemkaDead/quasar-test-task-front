import React from "react";

// Styles
import "./OnboardingContent.scss";

// Images
import image1 from "@Assets/images/image-1.png";

const OnboardingContent = ({ imageSrc, text }) => {
  return (
    <div className="onboarding-content">
      <div className="onboarding-content__img">
        <img src={imageSrc || image1} />
      </div>

      <div className="onboarding-content__text">{text}</div>
    </div>
  );
};

export default OnboardingContent;
