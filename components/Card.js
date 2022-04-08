import React from 'react'

const Card = ({ result }) => {
  return (
    <div className='relative cursor-pointer hover:scale-105 transition duration-300'>
        <img src={result.desktopImage} alt="" className='hidden md:flex'  />
        <img src={result.mobileImage} alt="" className='flex md:hidden'  />
        <p className='text-2xl text-white font-light absolute bottom-2 left-2 w-[60%] uppercase'>{result.name}</p>
    </div>
  )
}

export default Card