import React from 'react'
import Rating from './Rating';

function MovieCard({ title, genre, year, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{genre} | {year}</p>
      <Rating />
    </div>
  );
}

export default MovieCard;
