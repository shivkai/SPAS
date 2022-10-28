import React from 'react'

const Signup = () => {
  return (
    <div>
        <div className="h-full flex flex-col-reverse md:flex-row">
        {/* For Form Design Part */}

        <div className="Form-Part px-4 md:w-1/2 md:h-[100vh] bg-blue-500">

          <div className="wrapper p-8 bg-white">

        
          <div className="m-10 border mx-aut0">
            <div className="Account-Type">
              <h2 className="text-center font-semibold text-2xl pb-2 mb-4">
                Choose Account Type
              </h2>
              <div className="flex flex-row  max-h-[200px] md:max-h-[250px]">
                <div className="w-1/2 items-center "> <img className="cursor-pointer p-4 hover:border-2 hover:border-white h-full mx-auto w-[200px]" src={'/teach.png'}/><p className="text-center">Teacher</p></div>
                <div className="w-1/2"><img className="cursor-pointer p-4 hover:border-2 hover:border-white mx-auto  h-full w-[200px]" src={'/stud.png'}/><p className="text-center space-x-1">Student</p></div>
              </div>
            </div>
          </div>
          <div class="flex items-center h-screen w-full">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span class="block w-full text-xl uppercase font-bold mb-4">Enter User Detail</span>      
        <form class="mb-4" action="/" method="post">
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Username</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Email</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Roll Number</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Gender</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Age</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
        
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">Confirm Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Sign Up</button>
        </form>
        <a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
    </div>
  </div>
  </div>
        </div>

        {/* This part for image */}

        <div className="md:w-1/2 md:h-[100vh] bg-red-400">
          <div>
            <h1>This is image part</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup