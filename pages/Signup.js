import React,{useState}  from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'; 
import Image from 'next/image'
import {MdHelpOutline} from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const router = useRouter();
  const onChangeHanlder = (e)=>{
   if(e.target.name=="Age"){
    setAge(e.target.value);
   }
   else if(e.target.name=="Name"){
    setName(e.target.value);
   }
   else if(e.target.name=="Email"){
    setEmail(e.target.value);
   }
   else if(e.target.name=="Password"){
    setPassword(e.target.value);
   }
   else if(e.target.name=="Cpassword"){
    setCpassword(e.target.value);
   }
   else if(e.target.name=="Gender"){
    setGender(e.target.value);
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
    const data = {name,email,age,password,cpassword,gender,reg,state};
    if(ValidateEmail(email) && password===cpassword && age>8 && state!='none'){
      
      let res = await fetch('http://localhost:3000/api/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({name,email,password,gender,state,age,reg}),
      })
     let response = await res.json()
     if(response.success){
     toast.success('User Registered Successfully', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      router.push('/Login');
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
  }
  const [state,setState] = useState('none');
  const[age,setAge] = useState('')
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[cpassword,setCpassword] = useState('')
  const[reg,setReg] = useState('')
  const[gender,setGender] = useState('')
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
      <div className='hidden md:block'><h1>Signup Now To Digitize Your Learning</h1></div>
      <div>
      <p className="flex items-center p-1"><MdHelpOutline className="text-lg mr-2"/>Need Help</p>
      </div>
    </div>
    <div className=" bg-gradient-to-b from-sky-300 to-gray-200 min-h-screen flex justify-center">
        {/* For Form Design Part */}

        <div className="Form-Part   md:mt-0 mt-4 md:w-[80%]  ">
          <div className="wrapper ">
            <div className="w-[80%] mx-auto md:w-full bg-white rounded shadow-md py-14 px-4 md:px-14 md:m-4 md:max-w-lg md:mx-auto">
              <div className="Account-Type">
                <h2 className="text-center font-semibold text-2xl pb-2 mb-1">
                  Choose Account Type
                </h2>
                <h3 className="text-center mb-4">Or Go Back To <Link  href="/"><span className="text-blue-300 underline cursor-pointer">Home</span></Link></h3>

                <div className="flex flex-row  max-h-[200px] md:max-h-[250px]">
                  <div className={`w-1/2 items-center ${(state=='teacher')?'border-2 border-gray-400':''} `} onClick={()=>{setState("teacher")}}>
                    <img
                      className="cursor-pointer p-4 hover:border-2 hover:border-white h-full mx-auto w-[200px]"
                      src={"/teacher.png"}
                    />
                    <p className="text-center">Teacher</p>
                  </div>
                  <div className={`w-1/2 items-center ${(state=='student')?'border-2 border-gray-400':''} `} onClick={()=>{setState("student")}}>
                    <img
                      className="cursor-pointer p-4 hover:border-2 hover:border-white mx-auto  h-full w-[200px]"
                      src={"/student.png"}
                    />
                    <p className="text-center space-x-1">Student</p>
                  </div>
                </div>
                <div className="mt-14">
                  
                  {(state==="none")?<div className='flex flex-col justify-center items-center'><h1 className="text-center text-xl">Select a Account Type</h1><h1>Already Have An Account?<Link href={'/Login'} className='text-blue-400'>Login</Link></h1></div>:(state==="teacher")?
                  <div>
                  <span className="block w-full text-xl text-center uppercase font-bold mb-4">
                    Enter User Detail
                  </span>
                  <form className="mb-4" method='post'  onSubmit={submitHandler}>
                   
                         <div className="mb-4 md:w-full">
      <label htmlFor="name" className="block text-xs mb-1">Username</label>
       <input onChange={onChangeHanlder}  className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="text" name="Name" id="name" placeholder="Full Username" required/>
      </div>
      <div className="mb-4 md:w-full">
        <label htmlFor="email" className="block text-xs mb-1">Email</label>
        <input onChange={onChangeHanlder}   className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="email" name="Email" id="email" placeholder="User Email" required/>
      </div>
      <div className="mb-4 md:w-full">
        <label htmlFor="reg" className="block text-xs mb-1">Teacher Registration Number</label>
        <input onChange={onChangeHanlder}  className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="text" name="Reg" id="reg" placeholder="Teacher ID" required/>
     </div>
      <div className="mb-4 md:w-full">
        <label htmlFor="gender" className="block text-xs mb-1">Gender</label>
        <input onChange={onChangeHanlder}  className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="text" name="Gender" id="gender" placeholder="Enter Gender"/>
      </div>
      <div className="mb-4 md:w-full">
        <label htmlFor="age" className="block text-xs mb-1">Age</label>
        <input onChange={onChangeHanlder}  className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="number" name="Age" id="age" placeholder="Enter User Age" required/>
     </div>
        
     <div className="mb-6 md:w-full">
       <label htmlFor="password" className="block text-xs mb-1">Password</label>
       <input onChange={onChangeHanlder}  className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="password" name="Password" id="password" placeholder="Password" required/>      </div>
     <div className="mb-6 md:w-full">
       <label htmlFor="cpassword" className="block text-xs mb-1">Confirm Password</label>        <input onChange={onChangeHanlder}  autoComplete="off" className="w-full border rounded p-2 outline-none focus:shadow-outline" required type="password" name="Cpassword" id="cpassword" placeholder="Confirm Password"/>   
          </div>    
            <button className="bg-blue-500 hover:bg-blue-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Sign Up</button>
                 </form></div>:
                  <div>
                  <span className="block w-full text-xl text-center uppercase font-bold mb-4">
                    Enter User Detail
                  </span>
                  <form className="mb-4" method='post' onChange={onChangeHanlder}>              <div className="mb-4 md:w-full">
           <label htmlFor="name" className="block text-xs mb-1">Username</label>
           <input onChange={onChangeHanlder} className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="text" name="Name" id="name" required placeholder="Full Studentname"/>
         </div>
         <div className="mb-4 md:w-full">
           <label htmlFor="email" className="block text-xs mb-1">Email</label>
           <input onChange={onChangeHanlder} className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="email" name="Email" id="email" required placeholder="Student Email"/>
         </div>
         <div className="mb-4 md:w-full">
           <label htmlFor="roll" className="block text-xs mb-1">Roll Number</label>
         <input onChange={onChangeHanlder} className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="text" name="Roll" id="roll" required placeholder="Student Roll Number"/>
       </div>
       <div className="mb-4 md:w-full">
        <label htmlFor="gender" className="block text-xs mb-1">Gender</label>
         <input onChange={onChangeHanlder} className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="text" name="Gender" id="gender" placeholder="Gender"/>
       </div>
       <div className="mb-4 md:w-full">
         <label htmlFor="age" className="block text-xs mb-1">Age</label>
         <input onChange={onChangeHanlder} className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="number" name="Age" id="age" required placeholder="Student Age"/>
        </div>
        
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">Password</label>
            <input onChange={onChangeHanlder} className="w-full border rounded p-2 outline-none focus:shadow-outline"  autoComplete="off" type="password" name="Password" required id="password" placeholder="Password"/>
          </div>
         <div className="mb-6 md:w-full">
            <label htmlFor="cpassword" className="block text-xs mb-1">Confirm Password</label>
            <input onChange={onChangeHanlder} className="w-full border rounded p-2 outline-none focus:shadow-outline" autoComplete="off" type="password" name="Cpassword" required id="cpassword" placeholder="Confirm Password"/>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Sign Up</button>
     
                    </form></div>}
                    
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>



      </>
  )
}

export default Signup