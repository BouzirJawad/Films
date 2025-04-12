import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MDetails from './components/Movies/MDetails'
import SDetails from './components/Series/SDetails'
import Series from './pages/Series'
import Movies from './pages/Movies'

function App() {
  return (  
    <div className="flex flex-col min-h-screen">
    <Router>
      <Header />
      <main className='flex-1 mainDiv pb-20'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/:movieId' element={<MDetails />} />
          <Route path='/series' element={<Series />}/>
          <Route path='/series/:serieId' element={<SDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  ) 
}

export default App  