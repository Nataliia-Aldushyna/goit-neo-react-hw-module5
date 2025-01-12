import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CastCard from "../CastCard/CastCard";
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
          },
        });
        const filteredCast = response.data.cast.filter(
          (cast) => cast.profile_path 
        );
        setCast(filteredCast);
      } catch (err) {
        console.error("Error fetching cast data:", err);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Cast</h2>
        <ul className={css.castList}>
          {casts.length > 0 ? (
            casts.map((cast) => (
              <li key={cast.id} className={css.castItem}>
                <CastCard cast={cast} />
              </li>
            ))
          ) : (
            <p className={css.noCast}>No cast information available for this movie.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default MovieCast;
