import React from 'react';
import './Login.css'

import Hero from '../../components/Hero'
import Header from '../../components/Header'

function Login() {
  return (
    <div className="login">
        <Hero />
        <Header />

      <div className="login__body">
        <>
          <h1>Unlimited movies, TV shows, and more.</h1>
        </>
      </div>
    </div>
  );
}

export default Login