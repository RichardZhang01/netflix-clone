import React from "react";
import "./StoryCardText.css";

function StoryCardText({ headingOneText, headingTwoText, flipped }) {
  return (
    <div
      className={`storyCard__textContainer ${
        flipped ? "storyCard__left" : "storyCard__right"
      }`}
    >
      <h1 className="storyCard__title">{headingOneText}</h1>
      <h2 className="storyCard__subtitle">{headingTwoText}</h2>
    </div>
  );
}

export default StoryCardText;
