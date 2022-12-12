import React from "react";
import "./HeroBody.css";

import { BsChevronRight } from "react-icons/bs";

function HeroBody() {
  return (
    <div className="heroBody">
      <div className="heroBody__container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <form className="heroBody__form">
          <div className="herobody__form__inputGroup">
            <input type="text" id="herobody__form__input" required="true" />
            <label
              htmlFor="herobody__form__input"
              className="herobody__form__label"
            >
              Email Address
            </label>
          </div>
          <button type="submit" className="herobody__form__button">
            Get Started <BsChevronRight className="herobody__form__button__chevron" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroBody;
