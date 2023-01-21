import React from 'react';
import './Login.css'

import Hero from '../../components/Hero'
import Header from '../../components/Header'
import HeroBody from '../../components/HeroBody';
import StoryCard from '../../components/StoryCard';

function Login() {
  return (
    <div className="login">
        <Hero />
        <Header />
        <HeroBody />
        <StoryCard />
    </div>
  );
}

export default Login