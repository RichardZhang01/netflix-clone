import React from 'react';
import './Login.css'

import Hero from '../../components/Hero'
import Header from '../../components/Header'
import HeroBody from '../../components/HeroBody';
import StoryCardTV from '../../components/StoryCardTV';

function Login() {
  return (
    <div className="login">
        <Hero />
        <Header />
        <HeroBody />
        <StoryCardTV />
    </div>
  );
}

export default Login