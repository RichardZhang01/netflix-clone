import React from "react";
import "./StoryCard.css";

function StoryCard({ inverted = false }) {
  function StoryCardText() {
    return <div className="storyCard__text"></div>;
  }

  function StoryCardVideo() {
    return <div className="storyCard__video"></div>;
  }

  if (!inverted) {
    return (
      <div className="storyCard">
        <StoryCardText />
        <StoryCardVideo />
      </div>
    );
  } else {
    return (
      <div className="storyCard">
        <StoryCardVideo />
        <StoryCardText />
      </div>
    );
  }
}

export default StoryCard;
