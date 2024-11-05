import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function Header() {
  return (
    <div className='bg-blue-500 w-screen h-screen font-sans text-white'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Header
