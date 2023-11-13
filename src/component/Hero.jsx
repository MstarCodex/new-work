import React from 'react' 
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
            <div className='flex justify-center items-center py-4'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast, Flexibile financing for </p>
                 <Typed className='text-xl font-bold sm:text-4xl md:text-5xl md:pl-4 pl-2' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
               Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms. 
            </p>
            <a href="null" className='p-4 px-6 text-black mx-auto my-6 bg-[#00df9a] w-[200px] font-bold rounded-md'>Get Started</a>
        </div>
    </div>
  )
}

export default Hero