import React, { useState } from "react";

// Components
import PageLayout from "../../layouts/PageLayout";
import Button from "@Components/Button";

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
    <PageLayout
      classNameHeader="auth__header"
      headerSlot={
        <>
          <Button>
            <img src={plus} />
          </Button>
          <span>Создание профиля</span>
          <Button>
            <img src={check} />
          </Button>
        </>
      }
      contentSlot={
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
                onChange={() => setUserImg(userMan)}
              />
              <span>Мужчина</span>
            </label>

            <label className="auth-forms__user-gender">
              <input
                className="auth-forms__input--radio"
                type="radio"
                name="sex"
                value="women"
                onChange={() => setUserImg(userWoman)}
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
      }
    />
  );
};

export default AuthPage;
