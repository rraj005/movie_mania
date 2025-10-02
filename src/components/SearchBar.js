import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch, resetTrigger }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return; // Don't search empty strings
    navigate(`/search/${encodeURIComponent(trimmed)}`);
  };

  useEffect(() => {
    setQuery('');
  }, [resetTrigger]);

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
