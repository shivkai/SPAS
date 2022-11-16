import Image from "next/image";
import Link from "next/link";
import {MdHelpOutline} from 'react-icons/md';
import React,{useState} from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  var jwt = require('jsonwebtoken');
const Login = ({user,setUser}) => {
  
  const route = useRouter();

    const onChangeHanlder = (e)=>{
     if(e.target.name=="Email"){
      setEmail(e.target.value);
     }
     else if(e.target.name=="Password"){
      setPassword(e.target.value);
     }
     else if(e.target.name=="Reg"){
      setReg(e.target.value);
     }
    }
    function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      return (false)
  }
    const submitHandler = async (e)=>{
      e.preventDefault();
      const data = {email,password,reg};
      if(ValidateEmail(email) && state!='none'){
        
        let res = await fetch('http://localhost:3000/api/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({email,password,reg}),
        })
        let response = await res.json();
        if(response.success===true){
          toast.success('Login Successfully', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setEmail('');
            setPassword('');
            setReg('');
            localStorage.setItem('token',response.token);
            const role = jwt.decode(response.token).role;
            if(role==='student'){
          route.push('/Student')}
          else{
            route.push('/Teacher')
          }
        }
        else{
          toast.error(response.message, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
  
      }else{
        alert("Invalid Email");
  
      }
      console.log("submitted");
      console.log(data);
    }
  const [state,setState] = useState("none");
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[reg,setReg] = useState('')
  return (
    <>
<ToastContainer
position="top-left"
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
{/* Same as */}
<ToastContainer />
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
                    Enter Teacher Login Detail
                  </span>
                  <form className="mb-4" onSubmit={submitHandler} method='post'>
                    <div className="mb-4 md:w-full">
                      <label htmlFor="email" className="block text-xs mb-1">
                        Email
                      </label>
                      <input onChange={onChangeHanlder}
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="email"
                        name="Email"
                        id="email"
                        placeholder="Teacher Email "
                      />
                    </div>


                   <div className="mb-4 md:w-full">
                   <label htmlFor="reg" className="block text-xs mb-1">
                     Teacher Id
                   </label>
                   <input
                   onChange={onChangeHanlder}
                     className="w-full border rounded p-2 outline-none focus:shadow-outline"
                     type="text"
                     name="Reg"
                     id="reg"
                     placeholder="Teacher Registration Number"
                   />
                 </div> 
                 <div className="mb-6 md:w-full">
                      <label htmlFor="password" className="block text-xs mb-1">
                        Password
                      </label>
                      <input
                      onChange={onChangeHanlder}
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="password"
                        name="Password"
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
                    Enter Student Login Detail
                  </span>
                  <form className="mb-4" onSubmit={submitHandler} method='post'>
                    <div className="mb-4 md:w-full">
                      <label htmlFor="email" className="block text-xs mb-1">
                        Email
                      </label>
                      <input
                      onChange={onChangeHanlder}
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="email"
                        name="Email"
                        id="email"
                        placeholder="Student Email"
                      />
                    </div>
                  <div className="mb-4 md:w-full">
                  <label htmlFor="reg" className="block text-xs mb-1">
                    Roll Number
                  </label>
                  <input
                  onChange={onChangeHanlder}
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="text"
                    name="Reg"
                    id="reg"
                    placeholder="Sudent Registration Number"
                  />
                </div><div className="mb-6 md:w-full">
                      <label htmlFor="password" className="block text-xs mb-1">
                        Password
                      </label>
                      <input
                      onChange={onChangeHanlder}
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="password"
                        name="Password"
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
