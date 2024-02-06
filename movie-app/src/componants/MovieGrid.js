// MovieGrid.js
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar"; 

const MovieGrid = ({ movies }) => {
  return (
    <div className="d-flex justify-content-start m-3">
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3} className="card-container">
            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="card">
                <CardMedia
                  component="img"
                  height="340"
                  image={movie.Poster}
                  alt={movie.Title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {movie.Title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Year: {movie.Year}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieGrid;
