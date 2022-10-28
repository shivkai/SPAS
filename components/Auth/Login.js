import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <>
      <div className=" bg-green-400 flex flex-col-reverse md:flex-row">
        {/* For Form Design Part */}

        <div className="Form-Part  md:w-1/2  bg-blue-500">
          <div className="wrapper bg-white">
                    <div class="w-[50%] mx-auto md:w-full bg-white rounded shadow-md py-14 px-14 m-4 md:max-w-lg md:mx-auto">
            
              <div className="Account-Type">
                <h2 className="text-center font-semibold text-2xl pb-2 mb-4">
                  Choose Account Type
                </h2>
                <div className="flex flex-row  max-h-[200px] md:max-h-[250px]">
                  <div className="w-1/2 items-center ">
                    <img
                      className="cursor-pointer p-4 hover:border-2 hover:border-white h-full mx-auto w-[200px]"
                      src={"/teach.png"}
                    />
                    <p className="text-center">Teacher</p>
                  </div>
                  <div className="w-1/2">
                    <img
                      className="cursor-pointer p-4 hover:border-2 hover:border-white mx-auto  h-full w-[200px]"
                      src={"/stud.png"}
                    />
                    <p className="text-center space-x-1">Student</p>
                  </div>
                
              </div>
              <div class="mt-14">
                <span class="block w-full text-xl text-center uppercase font-bold mb-4">
                  Enter User Detail
                </span>
                <form class="mb-4" action="/" method="post">
                  <div class="mb-4 md:w-full">
                    <label for="email" class="block text-xs mb-1">
                      Email
                    </label>
                    <input
                      class="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Username or Email"
                    />
                  </div>
                  <div class="mb-4 md:w-full">
                    <label for="email" class="block text-xs mb-1">
                      Roll Number
                    </label>
                    <input
                      class="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Username or Email"
                    />
                  </div>
                  <div class="mb-6 md:w-full">
                    <label for="password" class="block text-xs mb-1">
                      Password
                    </label>
                    <input
                      class="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                    Login
                  </button>
                </form>
                <a class="text-blue-700 text-center text-sm" href="/login">
                  Forgot password?
                </a>
              </div>
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
    </>
  );
};

export default Login;
