import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div>
          <p className='text-slate-800'>This is the Hero's Component</p>
          <Button value={"Hero Button"} className={"bg-slate-800 text-white text-[16px] font-[500]"} />
    </div>
  )
}
