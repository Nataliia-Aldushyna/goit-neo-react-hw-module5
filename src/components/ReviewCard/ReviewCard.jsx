import css from './ReviewCard.module.css';

const ReviewCard = ({ review }) => {
  return (
    <div className={css.reviewItem}>
      <div className={css.reviewHeader}>
        <h3 className={css.author}>{review.author}</h3>
        <span className={css.date}>
          {new Date(review.created_at).toLocaleDateString()}
        </span>
      </div>
      <p className={css.reviewContent}>{review.content}</p>
    </div>
  );
};

export default ReviewCard;
