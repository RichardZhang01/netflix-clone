import React from "react";
import "./StoryCardTV.css";

import TV from "../../assets/images/tv.png";
import Video from "../../assets/videos/video-tv-0819.m4v";

function StoryCardTV() {
  return (
      <div className="storyCardTV">
        <div className="storyCardTV__container">
          <div className="storyCardTV__textContainer">
            <h1 className="storyCardTV__title">Enjoy on your TV.</h1>
            <h2 className="storyCardTV__subtitle">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players, and more.
            </h2>
          </div>
          <div className="storyCardTV__videoContainer">
            <img className="storyCardTV__image" src={TV} alt="TV" />
            <video
              src={Video}
              className="storyCardTV__video"
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            ></video>
          </div>
        </div>
      </div>
    );
}

export default StoryCardTV;
