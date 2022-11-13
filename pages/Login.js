import Image from "next/image";
import Link from "next/link";
import {MdHelpOutline} from 'react-icons/md';
import React,{useState} from "react";
const Login = () => {
  const [state,setState] = useState("none");
  return (
    <>

<div className='flex justify-between md:px-8 px-2 items-center py-2'>
      <div>
      <Image height={70} width={150} className="top-2 left-3" src={'/spas-logo.png'}/>
      </div>
      <div className='hidden md:block'><h1>Login Now To Enter A Digital World</h1></div>
      <div>
        <p className="flex items-center p-1"><MdHelpOutline className="text-lg mr-2"/>Need Help</p>
      </div>
    </div>

      <div className=" bg-gradient-to-b from-sky-300 to-gray-200 min-h-screen flex justify-center">
        {/* For Form Design Part */}

        <div className="Form-Part   md:mt-0 mt-4 md:w-1/2  ">
          <div className="wrapper   ">
            <div className="w-[70%] mb-2 mx-auto md:w-full bg-white rounded shadow-md py-14 px-4 md:px-14 md:m-4 md:max-w-lg md:mx-auto">
              <div className="Account-Type">
                <h2 className="text-center font-semibold text-2xl pb-2 ">
                  Choose Account Type
                  </h2>
               <h3 className="text-center mb-4">Or Go Back To <Link  href="/"><span className="text-blue-300 underline cursor-pointer">Home</span></Link></h3>
                <div className="flex flex-row  max-h-[200px] md:max-h-[250px]">
                  <div className={`w-1/2 items-center ${(state=='teacher')?'border-2 border-gray-400':''} `}   onClick={()=>{setState("teacher")}}>
                    <img
                      className="cursor-pointer p-4 hover:border-2 hover:border-white h-full mx-auto w-[200px]"
                      src={"/teacher.png"}
                    />
                    <p className="text-center">Teacher</p>
                  </div>
                  <div className={`w-1/2 ${(state=='student')?'border-2 border-gray-400':''} `} onClick={()=>{setState("student")}}>
                    <img
                      className="cursor-pointer p-4 hover:border-2 hover:border-white mx-auto  h-full w-[200px]"
                      src={"/student.png"}
                    />
                    <p className="text-center space-x-1">Student</p>
                  </div>
                </div>
                <div className="mt-14">
                  
                  {(state==="none")?<div className='flex flex-col justify-center items-center'><h1 className="text-center text-xl">Select a Account Type</h1><h1>Don't Have An Account? <Link href={'/Signup'} className='text-blue-400'>Register</Link> Now</h1></div>:(state==="teacher")?
                  <div>
                  <span className="block w-full text-xl text-center uppercase font-bold mb-4">
                    Enter User Detail
                  </span>
                  <form className="mb-4" action="/" method="post">
                    <div className="mb-4 md:w-full">
                      <label htmlFor="email" className="block text-xs mb-1">
                        Email
                      </label>
                      <input
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Teacher Email "
                      />
                    </div>


                   <div className="mb-4 md:w-full">
                   <label htmlFor="teachId" className="block text-xs mb-1">
                     Teacher Id
                   </label>
                   <input
                     className="w-full border rounded p-2 outline-none focus:shadow-outline"
                     type="email"
                     name="teachId"
                     id="teachId"
                     placeholder="Teacher Registration Number"
                   />
                 </div> 
                 <div className="mb-6 md:w-full">
                      <label htmlFor="password" className="block text-xs mb-1">
                        Password
                      </label>
                      <input
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                      Login
                    </button>
                  
                  <a
                    className="text-blue-700 ml-2 text-center text-sm"
                    href="/login"
                  >
                    Forgot password?
                  </a>
                 
                 </form></div>:
                  <div>
                  <span className="block w-full text-xl text-center uppercase font-bold mb-4">
                    Enter User Detail
                  </span>
                  <form className="mb-4" action="/" method="post">
                    <div className="mb-4 md:w-full">
                      <label htmlFor="email" className="block text-xs mb-1">
                        Email
                      </label>
                      <input
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Student Email"
                      />
                    </div>
                  <div className="mb-4 md:w-full">
                  <label htmlFor="roll" className="block text-xs mb-1">
                    Roll Number
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="text"
                    name="roll"
                    id="roll"
                    placeholder="Sudent Registration Number"
                  />
                </div><div className="mb-6 md:w-full">
                      <label htmlFor="password" className="block text-xs mb-1">
                        Password
                      </label>
                      <input
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                      Login
                    </button>
                  
                  <a
                    className="text-blue-700 ml-2 text-center text-sm"
                    href="/login"
                  >
                    Forgot password?
                  </a></form></div>}
                    
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* This part for image */}

 
      </div>
    </>
  );
};

export default Login;
