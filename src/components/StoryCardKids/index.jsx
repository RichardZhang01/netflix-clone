import React from 'react'
import './StoryCardKids.css';

import StoryCardText from '../StoryCardText';
import KidsImage from '../../assets/images/kids-profiles.png'

function StoryCardKids() {
  return (
    <div className="storyCardKids">
      <div className="storyCardKids__container">
        <StoryCardText
          headingOneText="Create profiles for kids."
          headingTwoText="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          flipped={false}
        />
        <div className="storyCardKids__imageContainer">
          <img
            className="storyCardKids__image"
            src={KidsImage}
            alt="kids profiles"
          />
        </div>
      </div>
    </div>
  );
}

export default StoryCardKids