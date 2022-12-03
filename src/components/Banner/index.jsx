import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/images/banner.jpg";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url(${BannerImage})`,
        backgroundColor: "black",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Movie DescriptionMovie Description Movie Description Movie
          DescriptionMovie DescriptionMovie Description Movie DescriptionMovie
          DescriptionMovie Description Movie Description Movie DescriptionMovie
          Description Movie DescriptionMovie Description Movie DescriptionMovie
          DescriptionMovie Description Movie DescriptionMovie Description Movie
          Description Movie DescriptionMovie Description Movie DescriptionMovie
          DescriptionMovie DescriptionMovie DescriptionMovie Description Movie
          Description Movie DescriptionMovie Description Movie DescriptionMovie
          Description Movie DescriptionMovie DescriptionMovie DescriptionMovie
          DescriptionMovie Description Movie DescriptionMovie Description Movie
          DescriptionMovie Description Movie Description Movie Description
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
