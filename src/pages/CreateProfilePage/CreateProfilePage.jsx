import React, { useState, useEffect, useRef } from "react";

// Components
import PageLayout from "@Layouts/PageLayout";
import Button from "@Components/Button";

// Images
import plus from "@Assets/images/plus.svg";
import check from "@Assets/images/check.svg";
import userMan from "@Assets/images/user-man.svg";
import userWoman from "@Assets/images/user-woman.svg";
import userGrandma from "@Assets/images/user-grandma.svg";
import userGrandfa from "@Assets/images/user-grandfa.svg";

// Styles
import "./CreateProfilePage.scss";

// Scripts
import phoneValidator from "@Utils/validators/phoneValidator";
import dateValidator from "@Utils/validators/dateValidator";
import nameValidator from "@Utils/validators/nameValidator";

let classNames = require("classnames");

const CreateProfilePage = () => {
  const [userImg, setUserImg] = useState(userMan);

  // Name input
  const [nameInput, setNameInput] = useState("");
  const [nameValidStatus, setNameValidStatus] = useState(false);

  useEffect(() => {
    let [validValue, validStatus] = nameValidator(nameInput);

    setNameInput(validValue);
    validStatus ? setNameValidStatus(true) : setNameValidStatus(false);
  }, [nameInput]);

  let nameClass = classNames("create-profile-forms__item", {
    succsess: nameValidStatus,
    danger: !nameValidStatus,
  });

  // Phone input
  const [phoneInput, setPhoneInput] = useState("");
  const [phoneValidStatus, setPhoneValidStatus] = useState(false);

  useEffect(() => {
    let [validValue, validStatus] = phoneValidator(phoneInput);

    setPhoneInput(validValue);
    validStatus ? setPhoneValidStatus(true) : setPhoneValidStatus(false);
  }, [phoneInput]);

  let phoneClass = classNames("create-profile-forms__item", {
    succsess: phoneValidStatus,
    danger: !phoneValidStatus,
  });

  // Date input
  const [dateInput, setDateInput] = useState("");
  const [dateIsActive, setDateIsActive] = useState(false);
  const [dateValidStatus, setDateValidStatus] = useState(false);

  const dateInstance = useRef(null);

  useEffect(() => {
    dateValidator(dateInput)
      ? setDateValidStatus(true)
      : setDateValidStatus(false);
  }, [dateInput]);

  let dateClass = classNames(
    "create-profile-forms__item create-profile-forms__item--date",
    {
      active: dateIsActive,
      succsess: dateValidStatus,
      danger: !dateValidStatus,
    }
  );

  return (
    <PageLayout
      classNameHeader="create-profile__header"
      headerCenterSideSlot={<span>Создайте профиль</span>}
      headerRightSideSlot={
        <Button>
          <img src={check} />
        </Button>
      }
      contentSlot={
        <div className="create-profile__forms create-profile-forms">
          <div className="create-profile-forms__img">
            <img src={userImg} />
          </div>

          <input
            className={nameClass}
            type="text"
            placeholder="Имя*"
            maxLength={30}
            value={nameInput}
            onInput={(e) => setNameInput(e.target.value)}
          />

          <div className="create-profile-forms__label">
            <label className="create-profile-forms__gender">
              <input
                className="create-profile-forms__item--radio"
                type="radio"
                name="sex"
                value="men"
                //! появляется баг с этим чеком
                // checked="checked"
                onChange={() => setUserImg(userMan)}
              />
              <span>Мужчина</span>
            </label>

            <label className="create-profile-forms__gender">
              <input
                className="create-profile-forms__item--radio"
                type="radio"
                name="sex"
                value="women"
                onChange={() => setUserImg(userWoman)}
              />
              <span>Женщина</span>
            </label>
          </div>

          <label className="create-profile-forms__label">
            <button
              className="create-profile-forms__item create-profile-forms__item--button"
              onClick={() => {
                dateInstance.current.click();
                setDateIsActive(true);
              }}
            >
              Выберите дату рождения
            </button>

            <input
              className={dateClass}
              type="date"
              ref={dateInstance}
              value={dateInput}
              onInput={(e) => setDateInput(e.target.value)}
            />
          </label>

          <input
            className={phoneClass}
            type="tel"
            placeholder="Укажите номер телефона"
            value={phoneInput}
            onInput={(e) => setPhoneInput(e.target.value)}
          />
        </div>
      }
    />
  );
};

export default CreateProfilePage;
