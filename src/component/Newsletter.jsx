import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want tips & tricks to optimize your fellow</h1>
                <p>Sign up newsletter and stay up to date</p>
            </div> 
            <div className='my-4 px-6'>
                <div className='flex flex-col sm:flex-row items-center  justify-between w-full'>
                    <input placeholder='email' className='p-3 flex w-full rounded-md text-black type my-6'/>
                    <a href="null" className='px-6 text-black mx-auto py-3 bg-[#00df9a] w-[200px] font-bold rounded-md'>Notify Me</a>
                </div>
                <p>We care bout the protection of your date, Read our <a href="null" className='text-[#00df9a] underline'>Private Policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter