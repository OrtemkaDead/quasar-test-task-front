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
  const birthdayInput = useRef(null);

  const phoneValidator = (e) => {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    e.target.value = !x[2]
      ? x[1]
      : "(" +
        x[1] +
        ")" +
        x[2] +
        (x[3] ? "-" + x[3] : "") +
        (x[4] ? "-" + x[4] : "");
  };

  const dateValidator = (value) => {
    let year = value.split("-")[0];

    year <= 1860 || year >= new Date().getFullYear()
      ? console.log("not valid")
      : console.log("valid");
  };

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
              onBlur={() => dateValidator(birthdayInput.current.value)}
            />
          </label>

          <input
            className="auth-forms__item"
            type="tel"
            placeholder="Укажите номер телефона"
            onInput={(e) => phoneValidator(e)}
          />
        </div>
      }
    />
  );
};

export default AuthPage;
