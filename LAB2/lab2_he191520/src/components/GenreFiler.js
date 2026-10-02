const GenreFiler = ({ selectedGenre, setSelectedGenre, genres }) => {
  return (
    <select
      value={selectedGenre}
      onChange={(event) => setSelectedGenre(event.target.value)}
      className="genre-select"
    >
      <option value="">Tất cả thể loại</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default GenreFiler;
