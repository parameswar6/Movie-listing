import MovieCard from './MovieCard';
import { useState } from "react";   
import movies from "../data/movies";



const MovieList = () => {

  // ✅ state must be INSIDE component
  const [search, setSearch] = useState("");

  return (
    <div>
      
      {/* ✅ input must be inside return */}
      <input
        type="text"
        placeholder="Search movie..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="container">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>

    </div>
  );
};

export default MovieList;