import React from 'react'
import { Link } from 'react-router-dom'

function SCard(props) {
  return (
    <Link to={`/series/${props.serieId}`}>
        <div key={props.movieId} className="rounded-2xl w-full shadow-xl hover:scale-110 transition duration-300">
              <img
                src={props.image || 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={props.title || 'Untitled'}
                className="w-full min-h-full rounded-2xl object-cover"
              />
        </div>
    </Link>
  )
}

export default SCard