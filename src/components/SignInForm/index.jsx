import React, { useState } from "react";
import "./SignInForm.css";

function SignInForm() {
  const [formData, setFormData] = useState({
    emailPhone: "",
    password: "",
  });

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="signInForm__container">
      <h1 className="signInForm__heading">Sign In</h1>
      <form className="signInForm">
        <div className="signInForm__emailInputGroup">
          <input
            id="signInForm__emailInput"
            type="text"
            name="emailPhone"
            onChange={inputChangeHandler}
            required={true}
          />
          <label
            className="signInForm__emailLabel"
            htmlFor="signInForm__emailInput"
          >
            Email or phone number
          </label>
        </div>

        <div className="signInForm__passwordInputGroup">
          <input
            id="signInForm__passwordInput"
            type="password"
            name="emailPhone"
            onChange={inputChangeHandler}
            required={true}
          />
          <label
            className="signInForm__passwordLabel"
            htmlFor="signInForm__passwordInput"
          >
            Password
          </label>
          {/* <button>SHOW</button> */}
        </div>

        <button type="submit" className="signInForm__signInButton">
          Sign In
        </button>

        <div className="signInForm__rememberMeInputGroup">
          <input id="signInForm__rememberMeInput" type="checkbox" />
          <label
            className="signInForm__rememberMeLabel"
            htmlFor="signInForm__rememberMeInput"
          >
            Remember me
          </label>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default SignInForm;
