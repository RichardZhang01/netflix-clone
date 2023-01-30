import React, { useState } from "react";
import "./EmailForm.css";

import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function EmailForm({ inputID }) {
  const [emailError, setEmailError] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const navigateTo = useNavigate();

  const emailErrorHandler = (event) => {
    const email = emailInput.trim();
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!email) return setEmailError("Email is required!");

    if (!re.test(email))
      return setEmailError("Please enter a valid email address");

    setEmailError(null);
  };

  const emailChangeHandler = (event) => {
    const email = event.target.value;
    setEmailInput(email);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInput.trim();
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (re.test(email)) {
      navigateTo("/signin", { state: { email: email } });
    }
  };

  return (
    <form className="emailForm" onSubmit={submitHandler}>
      <h3 className="emailForm__title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="emailForm__container">
        <div className="emailForm__inputGroup">
          <input
            type="text"
            id={inputID}
            className="emailForm__input"
            value={emailInput}
            onBlur={emailErrorHandler}
            onChange={emailChangeHandler}
            required={true}
          />
          <label htmlFor={inputID} className="emailForm__label">
            Email Address
          </label>
          <button type="submit" className="emailForm__button">
            Get Started{" "}
            <BsChevronRight className="emailForm__button__chevron" />
          </button>
        </div>
        {emailError && (
          <div className="emailForm__inputError__text">{emailError}</div>
        )}
      </div>
    </form>
  );
}

export default EmailForm;
