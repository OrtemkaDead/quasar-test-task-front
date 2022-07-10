import React, { useState } from "react";

// Images
import plus from "../../images/plus.svg";
import check from "../../images/check.svg";
import user from "../../images/user.png";
import userWoman from "../../images/user-woman.svg";
import userMan from "../../images/user-man.png";

// Styles
import "./AuthPage.scss";

const AuthPage = () => {
  let [userImg, setUserImg] = useState(user);

  return (
    <div className="auth-page auth">
      <div className="auth__top-bar auth-top-bar">
        <button className="auth-top-bar__btn">
          <img src={plus} />
        </button>
        <span className="auth-top-bar__text">Создание профиля</span>
        <button className="auth-top-bar__btn" type="submit">
          <img src={check} />
        </button>
      </div>

      <div className="container">
        <div className="auth__forms auth-forms">
          <div className="auth-forms__user-img">
            <img src={userImg} />
          </div>

          <input
            className="auth-forms__input auth-forms__user-name"
            type="text"
            placeholder="Введите имя"
          />

          <div className="auth-forms__user-genders">
            <label className="auth-forms__user-gender">
              <input
                className="auth-forms__input--radio"
                type="radio"
                name="sex"
                value="men"
                onChange={() => setUserImg((userImg = userMan))}
              />
              <span>Мужчина</span>
            </label>

            <label className="auth-forms__user-gender">
              <input
                className="auth-forms__input--radio"
                type="radio"
                name="sex"
                value="women"
                onChange={() => setUserImg((userImg = userWoman))}
              />
              <span>Женщина</span>
            </label>
          </div>

          <input
            className="auth-forms__input auth-forms__user-birthday"
            type="date"
          />
          <input
            className="auth-forms__input auth-forms__user-phone"
            type="tel"
            placeholder="Укажите номер телефона"
            maxLength="11"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
