import React,{useState} from 'react'
import {BiSearchAlt} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import Image from 'next/image';
import Myinfo from '../components/Student/Myinfo';
import Courses from '../components/Student/Courses';
import Books from '../components/Student/Books';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import isAuthorized from '../middleware/isAuthorized'

  var jwt = require('jsonwebtoken');
const Teacher = ({user,logout,student}) => {
  const [open,setOpen] = useState(false);
  const [val,setVal]= useState('info');
  const data = jwt.decode(user.value);
  const func = ()=>{

    (open)?setOpen(!open):setOpen(!open);
  }
  const out = ()=>{
    toast.error('Logged Out Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      console.log(user);
      setTimeout(()=>{
        logout();
      },3000)
    }
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <div className="parent bg-gray-900 flex md:flex-row flex-col z-20">
      <section className="sidebar relative  w-1/5 lg:block hidden bg-gray-600 lg:col-span-1">
        <div className="absolute h-full w-full bg-gray-900 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl border border-gray-900">
          {/* <!--LOGO start--> */}
          <img
            src="https://via.placeholder.com/400x400"
            alt="alt placeholder"
            className="w-20 h-20 mx-auto mb-5 rounded-full"
          />
          {/* <!--LOGO end-->
    <!--NAV start--> */}
          <ul className="text-gray-700  flex flex-col items-center gap-4 ">
            <li onClick={()=>{setVal('info')}} className="flex w-[80%] gap-2 cursor-pointer align-middle items-center p-2 bg-gray-800 hover:bg-gray-800 hover:text-gray-300">
              <BiSearchAlt className="text-5xl fas fa-search p-2 bg-white rounded-full mx-2" />
              <a className="text-xl text-white font-bold" href="#">
               Home
              </a>
            </li>
            <li onClick={()=>{setVal('course')}} className="flex w-[80%] gap-2 cursor-pointer align-middle items-center p-2 bg-gray-800 hover:bg-gray-800 hover:text-gray-300">
              <BiSearchAlt className="text-5xl  fas fa-search p-2 bg-white rounded-full mx-2" />
              <a className="text-xl text-white font-bold" href="#">
               Courses
              </a>
            </li>
            <li onClick={()=>{setVal('book')}} className="flex w-[80%] gap-2 cursor-pointer align-middle items-center p-2 bg-gray-800 hover:bg-gray-800 hover:text-gray-300">
              <BiSearchAlt className="text-5xl fas fa-search p-2 bg-white rounded-full mx-2" />
              <a className="text-xl text-white font-bold" href="#">
                Study Material
              </a>
            </li>
            
            
          </ul>
          {/* <!--NAV end--> */}
        </div>
      </section>
      <main className="main flex flex-col bg-blue-400 w-full">
        <div className="p-2 items-center relative flex flex-row justify-between bg-gradient-to-r from-sky-300 to-white">
         <div className='flex items-center'>
          
           <Image width={60} height={20} src={'/spas-noback.png'}/>
          <h1 className='md:text-2xl text-xl  ml-2 font-semibold italic'>Welcome back {data?data.name:'XXX'}</h1>
          </div>
      
          <div className='hidden lg:block'>
            <button className='p-2 rounded-lg bg-red-300 text-lg' onClick={out}>Log Out</button>
          </div>
          <div className='lg:hidden block' onClick={func}>
          <GiHamburgerMenu className='text-2xl'/>
          </div>
        </div>
        {(open)?<div className='flex flex-col  bg-blue-400 w-full z-50 '>

            <button onClick={()=>{setVal('info')}} className='p-2  bg-gray-200 cursor-pointer  border-b-2 border-gray-500'>My Info</button>
            <button onClick={()=>{setVal('course')}} className='p-2  bg-gray-200 cursor-pointer  border-b-2 border-gray-500'>Courses</button>
            <button onClick={()=>{setVal('book')}} className='p-2  bg-gray-200 cursor-pointer border-b-2 border-gray-500'>Books</button>
            <button  className='p-2 bg-red-300' onClick={out}>Log Out</button>
        </div>:<div></div>}

        {/* <div className='> */}
          <div className=' bg-gradient-to-b from-sky-200 to-gray-700'>
            {(val == 'course')?<><Courses/> </>:(val=='book')?<><Books/></>:<><Myinfo student={student} role={data?data.role:'none'}/></>}
          </div>
        {/* </div> */}
      </main>
    </div>
    </>
  )
}

export default isAuthorized(Teacher) 