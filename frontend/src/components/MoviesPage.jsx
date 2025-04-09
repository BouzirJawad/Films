import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesCard from './MoviesCard';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    url: 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies',
    headers: {
      'X-RapidAPI-Key': 'c47de1fbedmsheca034486436118p1d6d91jsnc35e7393ea45',
      'X-RapidAPI-Host': 'imdb236.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data)
        setMovies(response.data || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Most Popular Movies </h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
          {movies.splice(0, 5).map((movie, index) => (
            <MoviesCard key={index} movieId={movie.id} image={movie.primaryImage} title={movie.originalTitle} year={movie.releaseDate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
