import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SCard from './SCard';

const OnAir = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWJjZjU1NDZlNjA4NDJlNDJkOWU3MmY3NzdkMjQ1NSIsIm5iZiI6MTc0NDI5NDc2MC43NTUsInN1YiI6IjY3ZjdkMzY4ZDRjNDQ0YTFjYzk5N2JkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwe6_d4H8M4zoHd1DIBfUn0u_lliC3k7TxnUNFPFbos'
    }
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.results)
        setSeries(response.data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  return (
    <div className="p-4 min-h-scree">
      <h1 className="text-4xl font-bold mb-6 py-2">Airing Today </h1>
      {loading ? (
        <p>Loading Series...</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-5 ">
          {series.splice(0, 8).map((serie, index) => (
            <SCard key={index} serieId={serie.id} image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} title={serie.originalName} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OnAir;
