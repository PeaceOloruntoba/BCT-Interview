import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'

export default function App() {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Navbar />
      <Hero/>
      <Footer />
    </div>
  )
}
