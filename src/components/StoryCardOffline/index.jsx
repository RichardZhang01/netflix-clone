import React from "react";
import "./StoryCardOffline.css";

import StoryCardText from "../StoryCardText";
import MobileImage from "../../assets/images/mobile-ss.jpg";
import StrangerThingsPoster from "../../assets/images/stranger-things-poster.png";

function StoryCardOffline() {
  return (
    <div className="storyCardOffline">
      <div className="storyCardOffline__container">
        <div className="storyCardOffline__videoContainer">
          <img
            className="storyCardOffline__image"
            src={MobileImage}
            alt="Stranger Things on smartphone"
          />
          <div className="storyCardOffline__animationContainer">
            <div className="storyCardOffline__animationImageContainer">
              <img
                src={StrangerThingsPoster}
                alt="Stranger Things Poster"
                className="storyCardOffline__animationImage"
              />
            </div>
            <div className="storyCardOffline__animationTextContainer">
              <p className="storyCardOffline__animationTopText">
                Stranger Things
              </p>
              <p className="storyCardOffline__animationBottomText">
                Downloading...
              </p>
            </div>
            <div className="storyCardOffline_animationGif" aria-hidden={true}></div>
          </div>
        </div>
        <StoryCardText
          headingOneText="Download your shows to watch offline."
          headingTwoText="Available on all plans except Basic with ads."
          flipped={true}
        />
      </div>
    </div>
  );
}

export default StoryCardOffline;
