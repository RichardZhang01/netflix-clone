import React from "react";
import "./StoryCardWatch.css";

import StoryCardText from "../StoryCardText";
import DevicesImage from "../../assets/images/device-pile.png";
import StreamingVideo from "../../assets/videos/video-devices.m4v";

function StoryCardWatch() {
  return (
    <div className="storyCardWatch">
      <div className="storyCardWatch__container">
        <div className="storyCardWatch__videoContainer">
          <img
            className="storyCardWatch__image"
            src={DevicesImage}
            alt="computer monitor, smartphone, and tablet"
          />
          <video
            src={StreamingVideo}
            className="storyCardWatch__video"
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
          ></video>
        </div>
        <StoryCardText
          headingOneText="Watch everywhere."
          headingTwoText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        />
      </div>
    </div>
  );
}

export default StoryCardWatch;
