import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  return (
    <div className="App">
      <h1 className='heading'>Movie Mania</h1>
      <h1 className='heading1'>
        Creator Portfolio: <a href="https://www.linkedin.com/in/raunit-raj">Link</a>
      </h1>

      {/* Search bar always visible */}
      <SearchBar onSearch={setMovies} resetTrigger={location.pathname} />

      {/* Define routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="movie-list">
              {movies.map(movie => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
