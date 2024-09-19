import React from 'react'
import Search from './Search'

const Hero = () => {
  return (
    <div>
      <div className='flex flex-col items-center md:p-10 py-20 md:gap-6 gap-3 h-[650px] w-full bg-[#eef0fc]'>
        <h2 className=' text-[18px] md:text-lg'>Find cars for sale and rent near you .</h2>
        <h2 className=' md:text-[60px] font-bold text-3xl'>Find Your Dream Car</h2>
        <Search/>
       <img src='/tesla.png' className='mt-10' />
      </div>
    </div>
  )
}

export default Hero
