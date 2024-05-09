import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'


const Project = () => {
  return (
    <>
      <Header/>
        {/* Projects */}
        <div className='text-center mt-[8rem]' data-aos="fade-down">
            <div className='flex justify-center gap-5'>
            <img src="../../../public/img/projectlogo.png" alt="" className='size-[30px]'/>
            <h1 className='text-black text-3xl'>PROJECTS</h1>
            </div>
            <p className='flex justify-center text-black px-[50rem] mt-3'>Here you will find some of the personal and clients projects 
            that I created with each project containing its own case study</p>
        </div>
<div className="lg:px-[20rem] mt-10">
<ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
    <li className="relative flex flex-col sm:flex-row xl:flex-row items-start">
        <div className="order-1 sm:ml-6 xl:ml-6 w-[495px]" data-aos="fade-down-left">
            <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-indigo-500">html/css</span>title
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos accusantium expedita nostrum quae dolorem cupiditate veniam. Quas, cumque quo!</p>
                <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                </ul>
            </div><a
                className="btn inline-flex items-center  text-sm font-semibold whitespace-nowrap  mt-2"
                href="">Visit here
                </a>
        </div>
        <img src="../../../public/img/bg-banner.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[500px] h-[314px] w-[597px] object-cover border-2 border-black hover:border-[30px] transition-all" width="1216" height="640" data-aos="flip-left"/>
    </li>
</ul>
</div>



      <Footer/>
    </>
  )
}

export default Project
