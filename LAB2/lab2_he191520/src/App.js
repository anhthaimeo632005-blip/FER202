import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFiler from './components/GenreFiler';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { movies } from './datas/movies';
import { useLocalStorage } from './hooks/useLocalStorage';

const AppContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const genres = [...new Set(movies.map((movie) => movie.genre))];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredAndSortedMovies = movies
    .filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (sortBy === 'default') return 0;
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="app-container">
      <Header />

      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <GenreFiler
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          genres={genres}
        />

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="sort-select"
        >
          <option value="default">Sắp xếp: Mặc định</option>
          <option value="year">Sắp xếp: Năm</option>
          <option value="rating">Sắp xếp: Đánh giá</option>
          <option value="title">Sắp xếp: Tên</option>
        </select>
      </div>

      <MovieList
        movies={filteredAndSortedMovies}
        onSelect={setSelectedMovie}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />

      <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;