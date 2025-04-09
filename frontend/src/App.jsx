import React from 'react'
import MoviePage from './components/MoviesPage'
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function App() {
  return (  
    <div className="flex flex-col min-h-screen">
    <Router>
      <main className='flex-1 bg-gray-900'>
        <Routes>
          <Route path='/' element={<MoviePage />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
      </main>
    </Router>
    </div>
  ) 
}

export default App  