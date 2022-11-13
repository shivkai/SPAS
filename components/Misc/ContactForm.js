import React from 'react'

const ContactForm = () => {
  return (
    <div className=' p-2'>
        <div className='container md:w-[70%] text-gray-400 flex justify-between mx-auto p-4 rounded-2xl bg-sky-200 '>
            <div className=' mx-auto md:m-0  p-4 md:w-[70%]'>
                <div className='text-center mb-8'>
                    <h1 className='text-4xl  font-bold'>Contact Us</h1>
                    <p  className='text-2xl font-medium italic'>To Digitize Your Future Learning</p>
                </div>
                <div>
                <div>
                <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        </div>
        <button className='bg-gray-400 py-2 px-2 rounded-2xl text-white hover:scale-110'>Get Started</button>
        </form></div>
                </div>
            </div>
            <div className='hidden md:block '><img className='h-[450px]' src={'/anil-feedback.png'} /></div>
        </div>
    </div>
  )
}

export default ContactForm