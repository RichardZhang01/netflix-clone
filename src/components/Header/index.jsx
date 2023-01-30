import React from "react";
import "./Header.css";

import NetflixLogo from "../../assets/images/netflix-logo.png";
import { useNavigate } from "react-router-dom";

function Header({ showSignIn = false }) {
  const navigateTo = useNavigate();

  const signInHandler = () => {
    navigateTo("/signin");
  };

  return (
    <div className="header">
      <img className="header__logo" src={NetflixLogo} alt="Netflix logo" />
      {showSignIn && (
        <button className="header__button" onClick={signInHandler}>
          Sign In
        </button>
      )}
    </div>
  );
}

export default Header;
