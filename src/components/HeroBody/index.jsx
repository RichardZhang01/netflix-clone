import React from "react";
import "./HeroBody.css";

function HeroBody() {
  return (
    <div className="heroBody">
      <div className="heroBody__container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
      </div>

      <form>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div>
          <input type="email" />
          <label htmlFor="">Email Address</label>
        </div>
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}

export default HeroBody;
