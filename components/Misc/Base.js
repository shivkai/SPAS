import React from 'react'

const Base = () => {
  return (
    // <div>
    <>
      <div className="flex flex-col md:flex-row justify-around py-24 ">
        <div className="py-2 text-center m-4">
          <h1 className="text-2xl font-semibold">
            Unlock the true potential
            <br /> of education with SPAS
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col   flex-wrap items-center">
          <div className="flex flex-row ">
            <div className="p-8 lg:m-2 lg:border-r-2 lg:border-b-0 border-b-2 border-r-2 border-blue-300">
              <h1>2000+</h1>
              <p>Schools</p>
            </div>
            <div className="p-8 lg:m-2 lg:border-r-2 lg:border-b-0 border-b-2 border-blue-300">
              <h1>1k +</h1>
              <p>Teachers</p>
            </div>
          </div>

          <div className="flex flex-row ">
            <div className="p-8 lg:m-2 border-r-2 border-blue-300">
              <h1>2000+</h1>
              <p>Schools</p>
            </div>
            <div className="p-8 lg:m-2 lg:border-r-2 border-blue-300">
              <h1>1k +</h1>
              <p>Teachers</p>
            </div>
          </div>

          {/* <div  className='flex flex-row'>
                <div className='m-2 p-6 bg-blue-400'>
                    <h1>20+</h1>
                    <p>Countries</p>
                </div>
                <div className=' m-2 p-6 bg-blue-400'>
                    <h1>99%</h1>
                    <p>Customer <br/>Satisfaction <br/>Score</p>
                </div>
                </div> */}
        </div>
      </div>

      <div className="sliders  py-8  ">
        <div className="slider-tracks flex flex-row  justify-between  ">
          <div className="slides">
            <img className="w-20 h-30  " src={"/lg1.png"} />
          </div>
          <div className="slides  ">
            <img className="w-20 h-30   " src={"/lg2.png"} />
          </div>
          <div className="slides    ">
            <img className="w-20 h-30  " src={"/lg3.png"} />
          </div>
          <div className="slides    ">
            <img className="w-20 h-30  " src={"/lg4.png"} />
          </div>
          <div className="slides    ">
            <img className="w-20 h-30 " src={"/lg5.png"} />
          </div>
          <div className="slides   ">
            <img className="w-20 h-30  " src={"/lg6.png"} />
          </div>
          <div className="slides   ">
            <img className="w-20 h-30   " src={"/lg1.png"} />
          </div>
          <div className="slides   ">
            <img className="w-20 h-30  " src={"/lg2.png"} />
          </div>
          <div className="slides   ">
            <img className="w-20 h-30   " src={"/lg7.png"} />
          </div>
        </div>
      </div>

      <section className="overflow-hidden mt-14">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">
            Enable better future
            <br />
            for everyone
          </h1>
        </div>
        <div>
          <div className="grid container place-items-center mx-auto grid-cols-1 p-4 lg:grid-cols-2 items-center place-content-center  gap-2">
          
            <div className="card mb-2 overflow-hidden w-[100%] md:w-[80%]  flex flex-row justify-center bg-yellow-100 rounded-2xl">
              <div className="card-inner mt-[25px] py-2 px-4 flex flex-col ">
                <h1 className="text-xl font-bold  ">Schools</h1>
                <p className="ml-2 py-2 text-md md:text-lg  md:font-normal">
                  Automate operations, boost
                  <br />
                  efficiency and reduce
                  <br />
                  overheads with the most
                  <br />
                  powerful school management
                  <br />
                  platform by your side.
                </p>
              </div>
              <div className="flex align-bottom items-end">
                <img className="h-[80%]" src={"/school.webp"} />
              </div>
            </div>
            
            <div className="card mb-2 md:w-[80%] w-[100%] overflow-hidden  flex flex-row justify-center bg-sky-200 rounded-2xl">
              <div className="card-inner mt-[25px] py-2 px-4 flex flex-col ">
                <h1 className="text-xl font-bold  ">Teachers</h1>
                <p className="ml-2 py-2 text-md md:text-lg  md:font-normal">
                  Create an enriching learning
                  <br />
                  environment through world-
                  <br />
                  class learning content along
                  <br />
                  with digital tools that
                  <br />
                  simplify every classroom
                  <br />
                  operation.
                </p>
              </div>
              <div className="flex align-bottom items-end">
                <img className="h-[80%]" src={"/teacher.webp"} />
              </div>
            </div>
            <div className="card mb-2 md:w-[80%] w-[100%] overflow-hidden flex flex-row justify-center bg-rose-200 rounded-2xl">
              <div className="card-inner mt-[25px] py-2 px-4  flex flex-col ">
                <h1 className="text-xl font-bold ">Parents</h1>
                <p className="ml-2 py-2 text-md md:text-lg  md:font-normal">
                  Monitor & track your children’s
                  <br />
                  progress with complete
                  <br />
                  transparency and stay on top
                  <br />
                  of all the school updates with
                  <br />
                  ease.
                </p>
              </div>
              <div className="flex align-bottom items-end">
                <img className="h-[80%]" src={"/parent.webp"} />
              </div>
            </div>
            <div className="card mb-2 md:w-[80%] w-[100%]  flex flex-row justify-center bg-violet-300 rounded-2xl">
              <div className="card-inner mt-[25px] py-2 px-4  flex flex-col ">
                <h1 className="text-xl font-bold ">Students</h1>
                <p className="ml-2 py-2 text-md md:text-lg  md:font-normal">
                  Never miss a lesson with
                  <br />
                  continuous learning at<br/>your
                  
                  fingertips through <br /> classroom
                 
                  recordings,<br />questions and much more.
                </p>
              </div>
              <div className="flex align-bottom items-end">
                <img className="h-[80%] " src={"/studff.png"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mt-12 mb-8">
          <h1 className="md:text-5xl  text-3xl font-bold">
            Testimonials Of Our Proud Users
          </h1>
          <p className="text-lg italic font-light">
            See What Our User Have To Say
          </p>
        </div>
        <div className="grid gap-1 mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Very easy this was to integrate
              </h3>
              <p className="my-4 font-light">
                If you care for your time, I hands down would go with this."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p className="my-4 font-light">
                Designing with Figma components that can be easily translated to
                the utility classes of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Mindblowing workflow
              </h3>
              <p className="my-4 font-light">
                Aesthetically, the well designed components are beautiful and
                will undoubtedly level up your next application."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Software Engineer at Facebook
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Efficient Collaborating
              </h3>
              <p className="my-4 font-light">
                You have many examples that can be used to create a fast
                prototype for your team."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Base