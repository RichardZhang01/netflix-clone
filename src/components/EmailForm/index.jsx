import React from "react";
import './EmailForm.css'

import { BsChevronRight } from "react-icons/bs";

function EmailForm() {
  return (
    <form className="emailForm">
      <div className="emailForm__inputGroup">
        <input type="text" id="emailForm__input" required="true" />
        <label
          htmlFor="emailForm__input"
          className="emailForm__label"
        >
          Email Address
        </label>
      </div>
      <button type="submit" className="emailForm__button">
        Get Started{" "}
        <BsChevronRight className="emailForm__button__chevron" />
      </button>
    </form>
  );
}

export default EmailForm;
