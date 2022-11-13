import React from 'react'

const Hero = () => {
  return (
    <div className=' mx-auto mt-8  mb-4 flex flex-col md:flex-row justify-center align-middle items-center '>
        <div className='md:w-10/12  md:gap-6 gap-4 md:mt-0 mt-2 w-[90%] flex flex-col align-middle justify-center items-center'>
            <h1 className=' text-3xl md:text-3xl lg:text-4xl font-extrabold  mb-1'>All For One Platform</h1>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mb-2'>For Your Queries</h1>
            <h3 className='text-sm md:text-xl mb-2 font-normal'>Manage Your Every Need With One Click</h3>
            <button className='md:px-4  md:py-3 px-2 py-2 bg-blue-500 rounded-md text-xl text-white border-2 border-white'>Get Started</button>
        </div>
        <div className='md:w-1/2 w-[full]'>
            <img className='h-[60vh] md:h-[80vh] w-full' src={'anil-kapoor.png'}  />
        </div>
    </div>
  )
}

export default Hero