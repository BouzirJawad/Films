import React, {useState} from 'react'
import SPopular from '../components/Series/SPopular'
import OnAir from '../components/Series/OnAir'
import Rated from '../components/Series/Rated'
import SerieSearchResults from '../components/Series/SerieSearchResults'

function Series() {
      const [searchTerm, setSearchTerm] = useState("");
    
  return (
    <div>
      <div className="w-[70%] mx-auto mt-2">
      <p className="text-center text-3xl py-10">TVshows Series</p>
        <input
          type="text"
          placeholder="Search movies..."
          className="p-2 border border-gray-300 rounded-2xl mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm ? (
        <SerieSearchResults query={searchTerm} />
      ) : (
        <>
        <OnAir />
        <SPopular />
        <Rated />
        </>
    )}
    </div>
  )
}

export default Series