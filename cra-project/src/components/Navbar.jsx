import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <div className='flex items-center justify-center gap-12 py-4 bg-slate-800 text-white text-[20px] font-[600]'>
      <span><a href="" className=''>Home</a></span>
      <span><a href="" className=''>About</a></span>
      <span><a href="" className=''>Services</a></span>
      <span><a href="" className=''>Others</a></span>
          <span><a href="" className=''>Contact</a></span>
          <div className="bg-white">
              <Button value={"Navbar Button"} className={"text-[16px] font-[500]"} />
          </div>
    </div>
  )
}
