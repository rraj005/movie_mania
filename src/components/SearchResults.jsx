import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=22be0fba`);
        const data = await res.json();
        setMovies(data.Search || []);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
      setLoading(false);
    }
    fetchMovies();
  }, [query]);

  return (
    <div className="search-results">
      <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Search Results for: "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p style={{ color: 'white'}}>No movies found.</p>
      )}
    </div>
  );
};

export default SearchResults;
