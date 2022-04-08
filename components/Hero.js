import { MenuIcon } from '@heroicons/react/solid'

function Hero() {
  return (
    <div className="hero px-4 md:px-8 pt-8 pb-24 mb-10">
        <div className="flex justify-between items-center mb-10">
            <div>
              <img src="./images/logo.svg" alt="" />
            </div>
            <div className="hidden md:flex space-x-5 text-white text-lg">
              <p>About</p>
              <p>Careers</p>
              <p>Events</p>
              <p>Products</p>
              <p>Support</p>
            </div>

            <div className='flex md:hidden'>
              <MenuIcon className='h-8 cursor-pointer text-white' />  
            </div>
        </div>
        <div>
          <div className='uppercase w-full md:w-[60%] lg:w-[50%] text-5xl md:text-6xl p-3 md:p-5 border-2 border-white font-light font-main text-white'>
              immersive experiences that deliver
          </div>
        </div>
    </div>
  )
}

export default Hero