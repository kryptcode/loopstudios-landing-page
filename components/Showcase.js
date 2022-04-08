import React from 'react'

const Showcase = () => {
  return (
    <div className='w-90% mx-auto flex flex-col md:flex-row px-10 space-x-0 md:-space-x-24 items-end mb-5'>
        <div className='flex-1'>
            <img src="./images/desktop/image-interactive.jpg" className='w-full object-contain' alt="" />
        </div>
        <div className='flex-1 p-8 bg-white pb-0 text-center md:text-left'>
            <h3 className='text-4xl uppercase font-light '>
                The Leader in Interactive VR
            </h3>
            <p className='text-gray-500'>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
        </div>
    </div>
  )
}

export default Showcase