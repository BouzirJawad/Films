import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MCard from './MCard';

const MPopular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWJjZjU1NDZlNjA4NDJlNDJkOWU3MmY3NzdkMjQ1NSIsIm5iZiI6MTc0NDI5NDc2MC43NTUsInN1YiI6IjY3ZjdkMzY4ZDRjNDQ0YTFjYzk5N2JkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwe6_d4H8M4zoHd1DIBfUn0u_lliC3k7TxnUNFPFbos'
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.results)
        setMovies(response.data.results || []);
        console.log("it's me")
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4 min-h-scree">
      <h1 className="text-4xl font-bold mb-6">Most Popular Movies </h1>
      {loading ? (
        <p className='text-center mx-auto'>Loading movies...</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-5 ">
          {movies.slice(0, 8).map((movie, index) => (
            <MCard key={index} movieId={movie.id} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MPopular;
