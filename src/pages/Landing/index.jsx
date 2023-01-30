import React from 'react';
import './Landing.css'

import Hero from '../../components/Hero'
import Header from '../../components/Header'
import HeroBody from '../../components/HeroBody';
import StoryCardTV from '../../components/StoryCardTV';
import StoryCardWatch from '../../components/StoryCardWatch';
import StoryCardKids from '../../components/StoryCardKids';
import StoryCardOffline from '../../components/StoryCardOffline';
import StoryCardFAQ from '../../components/StoryCardFAQ';
import Footer from '../../components/Footer';

function Login() {
  return (
    <div className="login">
        <Hero />
        <Header />
        <HeroBody />
        <StoryCardTV />
        <StoryCardWatch />
        <StoryCardKids />
        <StoryCardOffline />
        <StoryCardFAQ />
        <Footer />
    </div>
  );
}

export default Login