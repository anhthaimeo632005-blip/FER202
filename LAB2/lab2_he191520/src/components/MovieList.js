import MovieItem from './MovieItem';

const MovieList = ({ movies, onSelect, favorites, onToggleFavorite }) => {
  if (movies.length === 0) {
    return <p className="no-results">Không tìm thấy phim nào!</p>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem 
          key={movie.id} 
          movie={movie} 
          onSelect={onSelect} 
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default MovieList;