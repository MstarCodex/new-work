import React from 'react'
import Laptop from '../Assest/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>DATA ANALYTICS DASHBOARD</p>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="null" className='p-4 px-6 bg-black mx-auto md:mx-0 my-6 text-center text-[#00df9a] w-[200px] font-bold rounded-md'>Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default Analytics