import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=cca6466191c181dd939507a79f960a27`;

  const { isLoading, data } = useFetch(API_URL);

  return (
    <div className="movie-details">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div
          className="movie-details-poster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
          }}
        ></div>
      )}
      <div className="movie-details-main"></div>
    </div>
  );
};

export default MovieDetails;
