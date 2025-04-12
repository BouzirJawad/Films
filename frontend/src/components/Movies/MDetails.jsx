import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function MDetails() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(true);

    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWJjZjU1NDZlNjA4NDJlNDJkOWU3MmY3NzdkMjQ1NSIsIm5iZiI6MTc0NDI5NDc2MC43NTUsInN1YiI6IjY3ZjdkMzY4ZDRjNDQ0YTFjYzk5N2JkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwe6_d4H8M4zoHd1DIBfUn0u_lliC3k7TxnUNFPFbos'
      }
    };
    
      useEffect(() => {
        const fetchMovie = async () => {
          try {
            const response = await axios.request(options);
            console.log(response.data)
            setMovie(response.data || []);
          } catch (error) {
            console.error('Error fetching movies:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchMovie();
      }, [movieId]);
      
  return (
    <div className="p-6 min-h-screen">
      {movie ? (
        <div className="max-w-4xl mx-auto bg-gray-400 dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4">{movie.title || 'Untitled'}</h1>

          <div className='flex gap-10'>

          <div className='w-1/5'>
            {movie.poster_path && (
              <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full max-w-md mb-4 rounded-lg shadow"
              />
            )}
          </div>      

          <div className='w-4/5'>
            <p className="text-sm mb-2"><strong>Plot:</strong> {movie.overview || 'No plot available.'}</p>
            <p className="text-sm mb-2"><strong>Year:</strong> {movie.release_date || 'N/A'}</p>
            <p className="text-sm mb-4"><strong>popularity:</strong> {movie.popularity || 'Untitled'}</p>
            <p className="text-sm mb-4"><strong>Language:</strong>{movie.original_language}</p>
            
            {movie.genres && (
              <p className="text-sm mb-2"><strong>Genres:</strong> {movie.genres.map(genres => genres.name).join(', ')}</p>
            )}
          </div>
          </div>
        </div>
      ) : (
        <div className='text-center'>Movie not found.</div>
      )}
    </div>
  )
}

export default MDetails