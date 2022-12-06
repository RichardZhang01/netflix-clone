import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import TopTen from "../../assets/images/top10.png"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchBannerMovie() {
      const request = await axiosInstance.get(requests.fetchNetflixOriginals);
      // console.log(request.data.results);

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundColor: "black",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__topTen">
          <img className="banner__topTen__icon" src={TopTen} alt="Top 10 icon" />
          <p className="banner__topTen__text">{`#${Math.floor(Math.random() * 10) + 1} in TV Shows Today`}</p>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__play">
            <FaPlay className="banner__icon" /> Play
          </button>
          <button className="banner__button banner__info">
            <BsInfoCircle className="banner__icon" /> More Info
          </button>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
