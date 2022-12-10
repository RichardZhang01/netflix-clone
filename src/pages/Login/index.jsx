import React from 'react';
import './Login.css'

import Hero from '../../components/Hero'

import NetflixLogo from "../../assets/images/netflix-logo.png";

function Login() {
  return (
    <div className="login">
        <Hero />
      {/* <div className="login__background"> */}
        <div className="login__header">
          <img className="login__logo" src={NetflixLogo} alt="Netflix logo" />
          <button className="login__button">Sign In</button>
        </div>
        {/* <div className="login__gradient" /> */}
      {/* </div> */}

      <div className="login__body">
        <>
          <h1>Unlimited movies, TV shows, and more.</h1>
        </>
      </div>
    </div>
  );
}

export default Login