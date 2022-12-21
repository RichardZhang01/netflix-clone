import React, { useState } from "react";
import "./EmailForm.css";

import { BsChevronRight } from "react-icons/bs";

function EmailForm() {
  const [emailError, setEmailError] = useState(null);

  const emailErrorHandler = (event) => {
    const inputEmail = event.target.value.trim();
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
    if (!inputEmail) return setEmailError('Email is required!')

    if (!re.test(inputEmail)) return setEmailError('Please enter a valid email address')

    setEmailError(null)
  }

  return (
    <form className="emailForm">
      <h3 className="emailForm__title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="emailForm__container">
        <div className="emailForm__inputGroup">
          <input
            type="text"
            id="emailForm__input"
            onBlur={emailErrorHandler}
            required={true}
          />
          <label htmlFor="emailForm__input" className="emailForm__label">
            Email Address
          </label>
          <button type="submit" className="emailForm__button">
            Get Started{" "}
            <BsChevronRight className="emailForm__button__chevron" />
          </button>
        </div>
        {emailError && <div className="emailForm__inputError__text">{emailError}</div>}
      </div>
    </form>
  );
}

export default EmailForm;
