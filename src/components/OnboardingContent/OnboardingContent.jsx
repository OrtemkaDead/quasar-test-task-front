import React from "react";

// Styles
import "./OnboardingContent.scss";

// Images
import image1 from "../../images/image-1.png";

const OnboardingContent = ({ children, imageUrl }) => {
  return (
    <div className="onboarding-content">
      <div className="onboarding-content__img">
        <img src={imageUrl || image1} />
      </div>

      <div className="onboarding-content__text">{children}</div>
    </div>
  );
};

export default OnboardingContent;
