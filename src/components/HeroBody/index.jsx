import React from "react";
import "./HeroBody.css";
import EmailForm from "../EmailForm";

function HeroBody() {
  return (
    <div className="heroBody">
      <div className="heroBody__container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>

        <EmailForm />
      </div>
    </div>
  );
}

export default HeroBody;
