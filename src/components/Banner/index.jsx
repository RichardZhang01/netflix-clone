import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

// import BannerImage from "../../assets/images/banner.jpg";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchBannerMovie() {
      const request = await axiosInstance.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchBannerMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundColor: "black",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__play">
            <FaPlay className="banner__icon" /> Play
          </button>
          <button className="banner__button banner__list">
            <BsPlusLg className="banner__icon" /> My List
          </button>
        </div>
        <h1 className="banner__description">
          {movie.overview}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
