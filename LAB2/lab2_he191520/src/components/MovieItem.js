const MovieItem = ({ movie, onSelect, isFavorite, onToggleFavorite }) => {
  return (
    <div className="movie-item">
      <div className="movie-info" onClick={() => onSelect(movie)}>
        <h3>{movie.title}</h3>
        <p className="movie-meta">{movie.genre} | {movie.year} | ⭐ {movie.rating}</p>
      </div>

      <div className="movie-actions">
        <button
          className={`fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(movie.id);
          }}
        >
          {isFavorite ? '❤️ Favorite' : '🤍 Favorite'}
        </button>
        <button
          className="view-btn"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(movie);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
