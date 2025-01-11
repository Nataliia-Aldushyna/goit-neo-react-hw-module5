import css from './CastCard.module.css';

const CastCard = ({ cast }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w185';
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"; 

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={cast.profile_path ? `${imgBaseUrl}${cast.profile_path}` : defaultImg} 
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
