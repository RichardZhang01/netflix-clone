import React, { useEffect, useState } from "react";
import "./Navbar.css";
import NetflixLogo from "../../assets/images/netflix-logo.png";
import Avatar from "../../assets/images/avatar.png";

function Navbar() {
  const [isShown, setIsShown] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${isShown && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={NetflixLogo} alt="Netflix logo" />

        <img className="nav__avatar" src={Avatar} alt="User avatar" />
      </div>
    </div>
  );
}

export default Navbar;
