// Movies.js
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import MovieGrid from "../src/componants/MovieGrid";
import MovieHeading from "../src/componants/movieheading"
import SearchMovie from "./componants/search";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./MovieDeteil";
import './style/navBar.css'

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Game of Thrones",
      "Year": "2011–2019",
      "imdbID": "tt0944947",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
  },
  {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "imdbID": "tt4154796",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
},
{
  "Title": "Taxi Driver",
  "Year": "1976",
  "imdbID": "tt0075314",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
  "Title": "Arcane",
  "Year": "2021–",
  "imdbID": "tt11126994",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
},
{
  "Title": "The Dark Knight",
  "Year": "2008",
  "imdbID": "tt0468569",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
},
{
  "Title": "The Dark Knight Rises",
  "Year": "2012",
  "imdbID": "tt1345836",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"
},
{
  "Title": "Peaky Blinders",
  "Year": "2013–2022",
  "imdbID": "tt2442560",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Deathly Hallows: Part 2",
  "Year": "2011",
  "imdbID": "tt1201607",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Sorcerer's Stone",
  "Year": "2001",
  "imdbID": "tt0241527",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Chamber of Secrets",
  "Year": "2002",
  "imdbID": "tt0295297",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Prisoner of Azkaban",
  "Year": "2004",
  "imdbID": "tt0304141",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Goblet of Fire",
  "Year": "2005",
  "imdbID": "tt0330373",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Order of the Phoenix",
  "Year": "2007",
  "imdbID": "tt0373889",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Deathly Hallows: Part 1",
  "Year": "2010",
  "imdbID": "tt0926084",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Half-Blood Prince",
  "Year": "2009",
  "imdbID": "tt0417741",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter 20th Anniversary: Return to Hogwarts",
  "Year": "2022",
  "imdbID": "tt16116174",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
},
{
  "Title": "Harry Potter and the Forbidden Journey",
  "Year": "2010",
  "imdbID": "tt1756545",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg"
},
{
  "Title": "Batman: The Dark Knight Returns, Part 1",
  "Year": "2012",
  "imdbID": "tt2313197",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
},

{
  "Title": "Batman: The Dark Knight Returns, Part 2",
  "Year": "2013",
  "imdbID": "tt2166834",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
},
{
  "Title": "Toy Story",
  "Year": "1995",
  "imdbID": "tt0114709",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
},
  ]);
  const [searchmovies, setSearchMovies] = useState('');

  const getMovieApi = async (searchmovies) => {
    const url = `https://www.omdbapi.com/?s=${searchmovies}&apikey=55e93a9a`;
    const response = await fetch(url);
    const responseJason = await response.json();

    if (responseJason.Search) {
      setMovies(responseJason.Search);
    }
  };

  // useEffect(() => {
  //   getMovieApi();
  // }, []);
  useEffect(() => {
    getMovieApi(searchmovies);
  }, [searchmovies]);


  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-2 mb-2 heading"> {/* Apply the 'heading' class */}
        <MovieHeading heading='Mos3ad best'/>
        <SearchMovie searchmovies={searchmovies} setSearchMovies={setSearchMovies} />
      </div>
      <div className="row">
        <Routes>
          <Route>
            <Route path="/" element={<MovieGrid movies={movies} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Movies;
