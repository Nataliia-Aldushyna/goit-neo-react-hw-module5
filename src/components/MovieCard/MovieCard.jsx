import css from "./MovieCard.module.css";
import { NavLink, useLocation } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300";
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const location = useLocation();

  return (
    <NavLink
      to={`/movies/${movie.id}`}
      state={{ from: location }}
      className={css.movieCard}
    >
      <img
        className={css.image}
        src={movie.poster_path ? `${imgBaseUrl}${movie.poster_path}` : defaultImg}
        alt={movie.title || "Image not available"}
      />
      <h2 className={css.title}>{movie.title}</h2>
    </NavLink>
  );
};

export default MovieCard;
