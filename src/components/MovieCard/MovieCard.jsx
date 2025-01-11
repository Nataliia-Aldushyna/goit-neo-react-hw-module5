import css from "./MovieCard.module.css";
import { NavLink, useLocation } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300";
  const location = useLocation();
  
  return (
    <NavLink
      to={`/movies/${movie.id}`}
      state={{ from: location.pathname, search: location.search }}
      className={css.movieCard} 
    >
      <img
        className={css.image}
        src={movie.poster_path ? `${imgBaseUrl}${movie.poster_path}` : ''}
        alt={movie.title || "Image not available"}
      />
      <h2 className={css.title}>{movie.title}</h2>
    </NavLink>
  );
};

export default MovieCard;
