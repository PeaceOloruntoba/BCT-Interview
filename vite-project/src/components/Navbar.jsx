import React from 'react'

export default function Navbar() {
  return (
    <div className='py-4 text-yellow-300 font-bold text-[16px]'>
      <ul className='flex gap-8 items-center justify-center'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Testimonial</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  )
}
