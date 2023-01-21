import React from "react";
import "./StoryCard.css";

function StoryCard({ inverted = false }) {
  function StoryCardText() {
    return (
      <div className="storyCard__textContainer">
        <h1 className="storyCard__title">Enjoy on your TV.</h1>
        <h2 className="storyCard__subtitle">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h2>
      </div>
    );
  }

  function StoryCardVideo() {
    return <div className="storyCard__videoContainer"></div>;
  }

  if (!inverted) {
    return (
      <div className="storyCard">
        <div className="storyCard__container">
          <StoryCardText />
          <StoryCardVideo />
        </div>
      </div>
    );
  } else {
    return (
      <div className="storyCard">
        <div className="storyCard__container">
          <StoryCardVideo />
          <StoryCardText />
        </div>
      </div>
    );
  }
}

export default StoryCard;
