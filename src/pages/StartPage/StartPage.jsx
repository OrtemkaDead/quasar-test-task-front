import React from "react";

// Images
import image from "../../images/image-1.png";

// Styles
import "./StartPage.scss";

const StartPage = () => {
  return (
    <div className="start-page start">
      <div className="container">
        <div className="start__skip-link">Пропустить</div>

        <div className="start__content">
          <div className="start__img">
            <img src={image} />
          </div>

          <div className="start__nav start-nav">
            <div className="start-nav__item start-nav__item--active"></div>
            <div className="start-nav__item"></div>
            <div className="start-nav__item"></div>
            <div className="start-nav__item"></div>
          </div>

          <div className="start__text">
            Авторизируйтесь и создавайте профили для своих близких, настраивая
            уровень заботы
          </div>
        </div>

        <button className="start__btn">Продолжить</button>
      </div>
    </div>
  );
};

export default StartPage;
