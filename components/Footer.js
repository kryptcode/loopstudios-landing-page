import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-5'>
        <div className='w-[80%] mx-auto text-white/90'>
            <div className='flex items-center justify-between mb-10'>
                <img src="./images/logo.svg" alt="" />
                <div className='flex items-center space-x-2'>
                    <div>
                        <img src="./images/icon-facebook.svg" alt="" />
                    </div>
                    <div>
                        <img src="./images/icon-twitter.svg" alt="" />
                    </div>
                    <div>
                        <img src="./images/icon-pinterest.svg" alt="" />
                    </div>
                    <div>
                        <img src="./images/icon-instagram.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-3 items-center'>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Events</p>
                    <p>Products</p>
                    <p>Support</p>
                </div>

                <div className='text-md'>
                    &copy; 2021 Loopstudios. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer