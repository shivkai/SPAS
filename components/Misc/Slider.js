import React from 'react'
const Slider = () => {
    
  return (
    <div className='slider bg-gray-100 mt-4 py-2 overflow-hidden '>
        <div className='slider-track flex flex-row   py-4 h-[60vh]  '>
            <div className='slide mx-1 w-[250px] md:w-[350px]'>
                 <img className='h-full rounded-2xl ' src={'/web-sol-1.webp'}/>
            </div>
            <div className='slide  mx-2  w-[250px]  md:w-[350px] '>
                 <img className=' h-full rounded-2xl ' src={'/web-sol-2.webp'}/>
            </div>
            <div className='slide    mx-2 '>
                 <img className='h-full rounded-2xl' src={'/web-sol-3.webp'}/>
            </div>
            <div className='slide  mx-2  '>
                 <img className='h-full rounded-2xl' src={'/web-sol-4.webp'}/>
            </div>
            <div className='slide    mx-2 '>
                 <img className='h-full rounded-2xl' src={'/web-sol-5.webp'}/>
            </div>
            <div className='slide mx-2   '>
                 <img className='h-full rounded-2xl' src={'/web-sol-6.webp'}/>
            </div>
            <div className='slide mx-2   w-[250px]  md:w-[350px]'>
                 <img className=' h-full rounded-2xl' src={'/web-sol-1.webp'}/>
            </div>
            <div className='slide  mx-1   w-[250px]  md:w-[350px]'>
                 <img className='h-full rounded-2xl' src={'/web-sol-2.webp'}/>
            </div>
          
            
        </div>
    </div>
  )
}

export default Slider