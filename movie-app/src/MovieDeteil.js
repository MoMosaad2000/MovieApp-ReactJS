import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import main Bootstrap CSS
import './style/movieDetail.css'; // Import custom CSS for MovieDetail component

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [randomColors, setRandomColors] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://www.omdbapi.com/?i=${id}&apikey=55e93a9a`;
      const response = await fetch(url);
      const movieDetails = await response.json();
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    // Generate random colors for each spinner
    const colors = [];
    for (let i = 0; i < 4; i++) {
      colors.push(getRandomColor());
    }
    setRandomColors(colors);
  }, []);

  const getRandomColor = () => {
    // Generate a random hex color code
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (!movie) {
    return (
      <div className="text-center">
        {/* Display Bootstrap spinners for loading animation */}
        {randomColors.map((color, index) => (
          <div key={index} className={`spinner-border`} style={{ color }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="movie-detail-container">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;
