import React from 'react'
import MPopular from '../components/Movies/MPopular'
import SPopular from '../components/Series/SPopular'

function HomePage() {
  return (
    <div>
            <p className='text-lg sm:text-xl md:text-5xl text-center py-5 mt-5'> <span className='text-orange-600'>JUUBUU</span>films</p>
            <p className='text-center mb-10'>Where you will find what you desire</p>
            <MPopular />
        <SPopular />
    </div>
  )
}

export default HomePage