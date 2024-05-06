import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";



const Footer = () => {
  return (
    <>
   <footer className='bg-black py-[2rem] w-full overflow-hidden'>
    <div className="container mx-[20rem]">
    <div className='grid grid-cols-2 gap-[45%] '>
    <div className="left mb-5">
        <h2 className=' mb-1'>PIOLO ARANZA</h2>
        <p className=''>A future programmer focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
    </div>
    <div className="right">
        <h2>SOCIALS</h2>
        <ul className='socialsf flex gap-5 items-center mt-4'>
            <li><Link to="#"><FaFacebookSquare /></Link></li>
            <li><Link to="#"></Link><FaTwitterSquare /></li>
            <li><Link to="#"></Link><FaInstagramSquare /></li>
            <li><Link to="#"></Link><BsYoutube /></li>
            <li><Link to="#"></Link><IoMailSharp /></li>
        </ul>
    </div>
    </div>

    <div className='border-t border-white mt-5'>
        <p className='text-center mt-5'>© Copyright 2024. Made by PIO ARANZA</p>
    </div>

    </div>

   </footer>


    </>
  )
}

export default Footer
