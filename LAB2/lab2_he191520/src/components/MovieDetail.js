const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-detail-overlay">
      <div className="movie-detail">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{movie.title} ({movie.year})</h2>
        
        <div className="detail-info">
          <p><strong>Thể loại:</strong> {movie.genre}</p>
          <p><strong>Đạo diễn:</strong> {movie.director}</p>
          <p><strong>Thời lượng:</strong> {movie.duration} phút</p>
          <p><strong>Đánh giá:</strong> ⭐ {movie.rating}/10</p>
        </div>
        
        <p className="detail-desc"><strong>Mô tả:</strong> {movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;