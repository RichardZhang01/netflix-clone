import React from "react";
import "./StoryCard.css";

function StoryCard({ inverted = false }) {
  if (!inverted) {
    return <div>StoryCard</div>;
  } else {
    return <div>Inverted StoryCard</div>;
  }
}

export default StoryCard;
