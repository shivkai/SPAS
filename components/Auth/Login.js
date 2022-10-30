import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <>
      <div className=" bg-slate-400 flex flex-col-reverse md:flex-row">
        {/* For Form Design Part */}

        <div className="Form-Part  bg-slate-400 h-1/2 md:w-1/2 md:h-full ">
          <div className="wrapper  bg-slate-400 ">
            <div className="w-[70%] mx-auto md:w-full bg-white rounded shadow-md py-14 px-4 md:px-14 md:m-4 md:max-w-lg md:mx-auto">
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
                <div className="mt-14">
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
                        placeholder="Username or Email"
                      />
                    </div>
                    <div className="mb-4 md:w-full">
                      <label htmlFor="email" className="block text-xs mb-1">
                        Roll Number
                      </label>
                      <input
                        className="w-full border rounded p-2 outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Username or Email"
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
                  </form>
                  <a
                    className="text-blue-700 text-center text-sm"
                    href="/login"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* This part for image */}

        <div className="md:w-1/2 md:h-full h-1/2 bg-red-400" >
          <img className="min-h-full" src={'/login.jpg'}/>
        </div>

      </div>
    </>
  );
};

export default Login;
