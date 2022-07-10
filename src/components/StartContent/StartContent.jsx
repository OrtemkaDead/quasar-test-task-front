import React from "react";

// Images
import image from "../../images/image-1.png";

const StartContent = () => {
  return (
    <div className="start__content">
      <div className="start__img">
        <img src={image} />
      </div>

      <div className="start__text">
        Авторизируйтесь и создавайте профили для своих близких, настраивая
        уровень заботы
      </div>
    </div>
  );
};

export default StartContent;
