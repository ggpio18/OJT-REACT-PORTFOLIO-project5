import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import 'animate.css';
import Gallery from './Gallery'



const Home = () => {
  return (
    <div>
      <Header/>
      {/*Hero  banner */}
      <section className='banner flex items-center'>
      <div className='bg-black w-[50px] py-5 px-2 '>
          <ul className='socialshb grid gap-8'>
            <li><Link to="#"><FaFacebookSquare /></Link></li>
            <li><Link to="#"></Link><FaTwitterSquare /></li>
            <li><Link to="#"></Link><FaInstagramSquare /></li>
            <li><Link to="#"></Link><FaYoutubeSquare /></li>
            <li><Link to="#"></Link><IoMailSharp /></li>
          </ul>
        </div>

        <div className="container">
          <div className="hero__wrapper text-center grid grid-cols-1 place-items-center phone:">
            <h1 className='text-[5rem] animate__animated animate__bounce'>Welcome</h1>
            <h1 className='text-[5rem]  animate-type2'>HELLO I'M <span className='text-haccent'>PIO</span></h1>
            <div className='lg:px-[17rem]  md:px-[10rem]'>
            <p className='mb-5 mx-[12rem]'>Im an I.T student aspiring to be A full stack-developer
                with a keen eye for detail. Lets work together so 
                we can achieve you business goals. </p>
                </div>
          <button className='btn'>Projects</button>
          </div>
        </div>

      </section>

      {/* About me */}
      <section id='aboutMe' className='aboutMe bg-secondary p-10 overflow-hidden transition-all'>
      <div className="container2">
        <div className="aboutme__wrapper grid lg:grid-cols-2 lg:gap-[16rem] md:grid-cols-1 md:gap-[10rem] sm:grid-cols-1 sm:gap-[5rem] place-items-center h-[70vh]">
          <div className="about_left">
            <h2 className='mb-3 text-3xl animate-type'>About_Pio.</h2>
            <p className='mb-5 text-base'>Hello! Im Piolo C. Aranza, an I.t student currently in my 4th year of the BSIT course. I have a strong passion for technology and genuine curiosity for the ever-evolving world of IT. Throughout my academic journey. I have gained solid foundation in web development, programming, database management, networking and game development. I actively seek opportunities to enhance my knowledge and skills through continuous learning, and I enjoy working on projects both independently and as part of a team</p>
           
            <p className='mb-5 text-base'>My goal is to become a well-rounded IT professional who can leverage technology to create practical solutions and drive positive change</p>

            <div>
              <ul className='socialam flex gap-5 items-center mb-5'>
                <li><Link to="#"><FaFacebookSquare /></Link></li>
                <li><Link to="#"></Link><FaTwitterSquare /></li>
                <li><Link to="#"></Link><FaInstagramSquare /></li>
                <li><Link to="#"></Link><FaYoutubeSquare /></li>
                <li><Link to="#"></Link><IoMailSharp /></li>
              </ul>
            </div>
            <button className='btn btn--v2'>Download CV</button>
          </div>
          <div className="about_right grid grid-cols-1 place-items-center relative">
            <img src="../../../public/img/aboutme.jpg" alt=""  className='object-cover 2xl:size-[500px]  lg:size-[500px] sm:size-[300px] border border-black'/>
            <div className="grid md:grid md:grid-cols-1 absolute lg:size-[500px]  md:size-[300px]  border bg-black border-black 
            -bottom-[20px] -right-4 ">
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* timeline  must ifnished*/}

      {/* projects gallery  MUST FINISHED*/}
      <section className='projectG bg-primary2 py-10'>
        <div className="project__wrapper">
          <div className='block-header text-center mb-5'>
            <h2 className='text-white text-3xl mb-3'>PROJECT GALLERY</h2>
            <p className='text-lg'>Here are some of my projects</p>
          </div>
            <Gallery/> 
        </div>
      </section>

      {/* cta */}
      <section className='cta grid place-items-center bg-white py-7 mt-5'>
          <div className="cta__content grid place-items-center mt-5">
              <h2 className='text-2xl'>Feel free to  talk about upcoming Project</h2>
              <p className='mb-5 text-lg'>"Reach out for personalized assistance."</p>
              <button className='btn btn--v3 mb-3'>Contact Us</button>
          </div>
      </section>

      {/* try */}
      
{/* <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
</div>
<div className="container">
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">

    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div>
</div>
</div> */}



{/* try */}

     <Footer/>
    </div>
  )
}

export default Home
