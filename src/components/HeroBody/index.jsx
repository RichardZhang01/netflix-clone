import React from "react";

import "./HeroBody.css";
// import EmailForm from "../EmailForm";

import { BsChevronRight } from "react-icons/bs";

function HeroBody() {
  return (
    <div className="heroBody">
      <div className="heroBody__container">
        <h1>Plans for every Budget.</h1>
        <h2>Get Basic with ads for just $5.99.</h2>

        <button className="heroBody__button">
          Get Started <BsChevronRight className="heroBody__button__chevron" />
        </button>
        {/* <EmailForm /> */}
      </div>
    </div>
  );
}

export default HeroBody;
