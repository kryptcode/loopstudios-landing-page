import React from 'react'
import Card from './Card'

const results = [
  {
      id: 1,
      desktopImage: "./images/desktop/image-deep-earth.jpg",
      mobileImage: "./images/mobile/image-deep-earth.jpg",
      name: "deep earth"
  },
  {
      id: 2,
      desktopImage: "./images/desktop/image-night-arcade.jpg",
      mobileImage: "./images/mobile/image-night-arcade.jpg",
      name: "night arcade"
  },
  {
      id: 3,
      desktopImage: "./images/desktop/image-soccer-team.jpg",
      mobileImage: "./images/mobile/image-soccer-team.jpg",
      name: "soccer team vr"
  },
  {
      id: 4,
      desktopImage: "./images/desktop/image-grid.jpg",
      mobileImage: "./images/mobile/image-grid.jpg",
      name: "the grid"
  },
  {
      id: 5,
      desktopImage: "./images/desktop/image-from-above.jpg",
      mobileImage: "./images/mobile/image-from-above.jpg",
      name: "from up above vr"
  },
  {
      id: 6,
      desktopImage: "./images/desktop/image-pocket-borealis.jpg",
      mobileImage: "./images/mobile/image-pocket-borealis.jpg",
      name: "pocket borealis"
  },
  {
      id: 7,
      desktopImage: "./images/desktop/image-curiosity.jpg",
      mobileImage: "./images/mobile/image-curiosity.jpg",
      name: "the curiosity"
  },
  {
      id: 8,
      desktopImage: "./images/desktop/image-fisheye.jpg",
      mobileImage: "./images/mobile/image-fisheye.jpg",
      name: "make it fisheye"
  }
]

const Projects = () => {
  
  return (
    <div className='w-[90%] mx-auto p-2 mb-16'>
      <div className='flex items-center justify-between mb-7'>
        <h3 className='text-3xl font-light uppercase'>
          Our Creations
        </h3>
        <button className='py-1.5 px-3 border-2 border-black uppercase tracking-widest hover:text-white hover:bg-black duration-300 transition hidden md:flex'>
          See all
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-4'>
        {
         results.map(result => (
             <Card key={result.id} result={result} />
         ))
        }
      </div>

      <button className='py-1.5 px-3 border-2 border-black uppercase tracking-widest hover:text-white hover:bg-black duration-300 transition md:hidden flex'>
          See all
      </button>
    </div>
  )
}

export default Projects