import React from 'react'

function OAuthBtn({label, onclick, src}) {
  return (
    <button className='flex justify-center items-center border-2' onClick={onclick}>
        <div className='border-2'>
            <img className='w-5 h-5 m-2' src={src} alt={label} />
        </div>
        <p className='mx-4 font-bold text-sm md:text-lg'>{label}</p>
    </button>
  )
}

export default OAuthBtn