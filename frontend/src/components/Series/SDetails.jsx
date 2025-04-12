import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function SDetails() {
  const { serieId } = useParams()
  const [serie, setSerie] = useState()
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${serieId}?language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWJjZjU1NDZlNjA4NDJlNDJkOWU3MmY3NzdkMjQ1NSIsIm5iZiI6MTc0NDI5NDc2MC43NTUsInN1YiI6IjY3ZjdkMzY4ZDRjNDQ0YTFjYzk5N2JkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwe6_d4H8M4zoHd1DIBfUn0u_lliC3k7TxnUNFPFbos'
    }
  };
  
    useEffect(() => {
      const fetchSerie = async () => {
        try {
          const response = await axios.request(options);
          console.log(response.data)
          setSerie(response.data || []);
        } catch (error) {
          console.error('Error fetching movies:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchSerie();
    }, [serieId]);
    
return (
  <div className="p-6 min-h-screen">
    {serie ? (
      <div>
      <div className="max-w-4xl mx-auto bg-gray-400 dark:bg-gray-700 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">{serie.original_name || 'Untitled'}</h1>

        <div className='flex gap-10'>

        <div className='w-1/5'>
          {serie.poster_path && (
            <img
            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
            alt={serie.original_name}
            className="w-full max-w-md mb-4 rounded-lg shadow"
            />
          )}
        </div>      

        <div className='w-4/5'>
          <p className="text-sm mb-2"><strong>Plot:</strong> {serie.overview || 'No plot available.'}</p>
          <p className="text-sm mb-2"><strong>Updated:</strong> {serie.last_air_date || 'N/A'}</p>
          <p className="text-sm mb-4"><strong>popularity:</strong> {serie.popularity || 'Untitled'}</p>
          <p className="text-sm mb-4"><strong>Language:</strong>{serie.original_language}</p>
          <p className="text-sm mb-4"><strong>Season:</strong>{serie.seasons.length}</p>
          
          {serie.genres && (
            <p className="text-sm mb-2"><strong>Genres:</strong> {serie.genres.map(genres => genres.name).join(', ')}</p>
          )}
        </div>
        </div>
      </div>

      </div>
    ) : (
      <div className='text-center'>Serie not found.</div>
    )}
  </div>
)
}

export default SDetails