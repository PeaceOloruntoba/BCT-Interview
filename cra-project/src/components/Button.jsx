import React from 'react'

export default function Button({className, value, ...props}) {
    return (
        <button className={`bg-slate-800 text-white ${className}`} {...props}>{value}</button>
  )
}
