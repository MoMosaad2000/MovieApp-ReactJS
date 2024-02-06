// MovieDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://www.omdbapi.com/?i=${id}&apikey=55e93a9a`;
      const response = await fetch(url);
      const movieDetails = await response.json();
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;
