import React from 'react'

export default function Card({elemento, icon}) {
  return (
    <a
          className="block rounded-xl border border-blue-800 p-8 shadow-xl transition hover:border-blue-300 hover:shadow-blue-700/10"
          href="/services/digital-campaigns"
        >
  
          
             {icon}
          
         
  
          <h2 className="mt-4 text-xl font-bold ">{elemento}</h2>
  
         
        </a>
  )
}
