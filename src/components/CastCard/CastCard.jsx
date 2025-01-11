import css from './CastCard.module.css';
import placeHolderImg from '../../assets/images/placeHolderImg.jpg';

const CastCard = ({ cast }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w185';

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={cast.profile_path ? `${imgBaseUrl}${cast.profile_path}` : placeHolderImg}
          alt={cast.name || 'No image available'}
        />
      </div>
      <div className={css.details}>
        <h3 className={css.name}>{cast.name}</h3>
        <p className={css.character}>
          <span className={css.label}>Character:</span> {cast.character}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
