import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
useEffect(()=>{
    window.addEventListener('resize', eventHandler);
    return () => window.removeEventListener('resize', eventHandler)
    
},[])
    const eventHandler = ()=>{
        const temp = document.getElementById("down").classList;
        if(window.innerWidth>750){
            temp.add("hidden");
        }
    }

    const func = ()=>{
        
        const temp = document.getElementById("down").classList;
       
        temp.toggle("hidden");
        
    }
  return (
    <>
    <div className='flex  flex-row md:justify-between md:m-0 py-2  mx-4 justify-between relative'>
        <div className='ml-3'><Image height={70} width={150} className="top-2 left-3" src={'/spas-logo.png'}/> </div>
        <div className=' hidden md:flex w-[40%]  lg:w-[30%] flex-row justify-around align-middle items-center'>
            <div className='lg:text-xl font-semibold'>Solution</div>
            <div className='lg:text-xl font-semibold'>Features</div>
            <div className='lg:text-xl font-semibold'>Plans</div>
            <div className='lg:text-xl font-semibold'>About Us</div>
        </div>
        <div className='w-[20%] hidden md:flex justify-end'>
        <Link href="/Login">
   <button className='my-4 border px-4 py-2 border-green-100 text-white font-semibold bg-green-400  rounded-xl'>Login</button>
</Link>
        <Link href="/Signup">
   <button className='my-4 border px-4 py-2 border-green-100 text-white font-semibold bg-sky-400 rounded-xl'>Signup</button>
</Link>
      </div>
        <div className='md:hidden block my-auto' onClick={func}><GiHamburgerMenu className='text-3xl'/></div>
    </div>
    <div id="down" className='hidden absolute top-20 w-full'>
    <div className='flex flex-col  bg-blue-400 w-full z-50 '>

<button  className='p-2  bg-sky-200 cursor-pointer border-b-2 hover:bg-sky-100 border-sky-500'>Books</button>
<button  className='p-2  bg-sky-200 cursor-pointer border-b-2 hover:bg-sky-100 border-sky-500'>About Us</button>
<button  className='p-2  bg-sky-200 cursor-pointer border-b-2 hover:bg-sky-100 border-sky-500'>Contact Us</button>
<Link  href="/Signup" className='p-2 text-center bg-sky-200 cursor-pointer hover:bg-green-100  border-b-2 border-sky-500'>Signup</Link>
<Link href={'/Login'} className='p-2  bg-sky-200 cursor-pointer text-center hover:bg-red-100 border-b-2 border-sky-500'>Login</Link>
</div>
        {/* <div className='flex flex-col align-middle items-center'>
        <Link href="/Login" className='border-b-2 border-gray-400 px-4 py-2 text-center rounded-lg mb-2'>
   Login
</Link>
        <Link href="/Signup">
   <button className='bg-green-400 w-[80%] rounded-lg'>Signup</button>
</Link>
         
            <div className='flex flex-col mt-2'>
                <div className='mt-2 font-semibold'>Solutions</div>
                <div className='mt-2 font-semibold'>Features</div>
                <div className='mt-2 font-semibold'>Plans</div>
                <div className='mt-2 font-semibold'>About Us</div>
            </div>
        </div> */}
        </div>
    </>
  )
}

export default Navbar