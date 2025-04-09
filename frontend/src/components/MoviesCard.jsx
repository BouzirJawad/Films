import React from 'react'
import { Link } from 'react-router-dom'

function MoviesCard(props) {
  return (
    <Link to={`/movies/${props.movieId}`}>
        <div key={props.movieId} className="bg-gray-800 rounded-2xl w-full shadow-lg ">
              <img
                src={props.image || 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={props.title || 'Untitled'}
                className="w-full min-h-full rounded-2xl object-cover"
              />
        </div>
    </Link>
  )
}

export default MoviesCard