import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SCard from './SCard';

const SerieSearchResults = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return setResults([]);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWJjZjU1NDZlNjA4NDJlNDJkOWU3MmY3NzdkMjQ1NSIsIm5iZiI6MTc0NDI5NDc2MC43NTUsInN1YiI6IjY3ZjdkMzY4ZDRjNDQ0YTFjYzk5N2JkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwe6_d4H8M4zoHd1DIBfUn0u_lliC3k7TxnUNFPFbos',
              accept: 'application/json',
            },
          }
        );
        setResults(response.data.results);
      } catch (error) {
        console.error('Search error:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-5">
        {results.length > 0 ? (
          results.map((movie) => (
            <SCard
              key={movie.id}
              movieId={movie.id}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SerieSearchResults;
