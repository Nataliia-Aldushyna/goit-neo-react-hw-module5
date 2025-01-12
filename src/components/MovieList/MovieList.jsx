import { useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  const location = useLocation();  

  return (
    <div className={css.container}>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.movieItem}>
            <MovieCard movie={movie} location={location} />  {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
