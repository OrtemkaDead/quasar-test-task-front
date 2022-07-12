import React, { useState, useRef } from "react";

// Components
import PageLayout from "@Layouts/PageLayout";
import Button from "@Components/Button";

// Images
import plus from "@Assets/images/plus.svg";
import check from "@Assets/images/check.svg";
import user from "@Assets/images/user.png";
import userWoman from "@Assets/images/user-woman.svg";
import userMan from "@Assets/images/user-man.png";

// Styles
import "./AuthPage.scss";

const AuthPage = () => {
  const [userImg, setUserImg] = useState(user);
  const [phoneValue, setPhoneValue] = useState("");
  const birthdayInput = useRef(null);

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
          <div className="auth-forms__img">
            <img src={userImg} />
          </div>

          <input
            className="auth-forms__item"
            type="text"
            placeholder="Введите имя"
            maxLength={40}
          />

          <div className="auth-forms__label">
            <label className="auth-forms__gender">
              <input
                className="auth-forms__item--radio"
                type="radio"
                name="sex"
                value="men"
                onChange={() => setUserImg(userMan)}
              />
              <span>Мужчина</span>
            </label>

            <label className="auth-forms__gender">
              <input
                className="auth-forms__item--radio"
                type="radio"
                name="sex"
                value="women"
                onChange={() => setUserImg(userWoman)}
              />
              <span>Женщина</span>
            </label>
          </div>

          <label className="auth-forms__label">
            <button
              className="auth-forms__item auth-forms__item--button"
              onClick={() => {
                birthdayInput.current.click();
                birthdayInput.current.className += " active";
              }}
            >
              Выберите дату рождения
            </button>

            <input
              className="auth-forms__item auth-forms__item--date"
              type="date"
              ref={birthdayInput}
            />
          </label>

          <input
            className="auth-forms__item"
            type="tel"
            placeholder="Укажите номер телефона"
            maxLength="11"
            value={phoneValue}
            onInput={(e) => setPhoneValue(e.target.value)}
            onBlur={() => console.log(/^\d+$/.test(phoneValue))}
          />
        </div>
      }
    />
  );
};

export default AuthPage;
