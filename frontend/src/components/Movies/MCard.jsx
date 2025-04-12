import React from 'react'
import { Link } from 'react-router-dom'

function MCard(props) {
  return (
    <Link to={`/movies/${props.movieId}`}>
        <div key={props.movieId} className="rounded-2xl w-full shadow-xl hover:scale-110 transition duration-300">
          {props.image ? 
              <img
                src={props.image || 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={props.title || 'Untitled'}
                className="w-full min-h-full rounded-2xl object-cover"
              />
              :
              <div className='w-w-full min-h-full rounded-2xl object-cover'>
                <p>Error fetching this movie</p>
              </div>
            }
        </div>
    </Link>
  )
}

export default MCard