import React from 'react'
import './Header.css'

import NetflixLogo from "../../assets/images/netflix-logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={NetflixLogo} alt="Netflix logo" />
      <button className="header__button">Sign In</button>
    </div>
  );
}

export default Header