import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovies() {
      const request = await axiosInstance.get(fetchUrl);

      setMovies(request.data?.results);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters ${isLargeRow ? "row__postersLarge" : ""}`}>
        {movies.map((movie) => {
          if (movie.backdrop_path) {
            return (
              <img
                className={`row__poster ${
                  isLargeRow ? "row__posterLarge" : ""
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={`${movie.name} poster`}
              />
            );
          }

          return <></>;
        })}
      </div>
    </div>
  );
}

export default Row;
