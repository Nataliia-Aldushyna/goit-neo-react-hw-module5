import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getApiOptions from '../../services/api';

import ReviewCard from "../ReviewCard/ReviewCard";
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
        const response = await axios.get(url, getApiOptions);
        setReviews(response.data.results);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Movie Reviews</h2>
        <ul className={css.reviewList}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <li key={review.id} className={css.reviewItem}>
                <ReviewCard review={review} />
              </li>
            ))
          ) : (
            <p className={css.noReviews}>No reviews available for this movie.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default MovieReviews;
