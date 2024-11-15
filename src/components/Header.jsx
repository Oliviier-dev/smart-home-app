import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function Header() {
  return (
    <div className='bg-blue-600 w-screen h-fit md:h-fit font-sans text-white relative'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Header
