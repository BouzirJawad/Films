import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function MovieDetails() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(true);

    const options = {
        method: 'GET',
        url: `https://imdb236.p.rapidapi.com/imdb/${movieId}`,
        headers: {
          'X-RapidAPI-Key': 'c47de1fbedmsheca034486436118p1d6d91jsnc35e7393ea45',
          'X-RapidAPI-Host': 'imdb236.p.rapidapi.com',
        },
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
    <div className="p-6 bg-gray-900 min-h-screen  text-white">
      {movie ? (
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4">{movie.originalTitle || 'Untitled'}</h1>
          <h1 className="text-sm mb-4">{movie.type || 'Untitled'} .{movie.spokenLanguages}</h1>
          
          {movie.primaryImage && (
            <img
              src={movie.primaryImage}
              alt={movie.originalTitle}
              className="w-full max-w-md mb-4 rounded-lg shadow"
            />
          )}

          <p className="mb-2"><strong>Year:</strong> {movie.releaseDate || 'N/A'}</p>
          <p className="mb-2"><strong>Plot:</strong> {movie.description || 'No plot available.'}</p>
          
          {movie.genres && (
            <p className="mb-2"><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          )}

          {movie.cast && (
            <p className="mb-2"><strong>Cast:</strong> {movie.cast.slice(0,5).map(cast => cast.fullName).join(', ')}</p>
          )}
        </div>
      ) : (
        <div>Movie not found.</div>
      )}
    </div>
  )
}

export default MovieDetails