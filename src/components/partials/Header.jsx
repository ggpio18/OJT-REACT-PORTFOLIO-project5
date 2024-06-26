import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  let Links =[
    {name:"HOME",link:"/home"},
    {name:"ABOUT",link:"#aboutMe"},
    {name:"PROJECT",link:"/project"},
    {name:"CONTACT",link:"/contact"},
  ];
  let [open, setOpen] =useState(false);

  return (
    <>
    {/* <header className='bg-black w-full '>
      <div className='container2 w-full'>
        <div className="header__wrapper flex justify-between items-center w-full">
        <div>
          
        </div>
          <ul className='menu flex items-center gap-10'>
            <li><Link to="/home">Home</Link></li>
            <li className='transition-all'><a href="#aboutMe">About</a></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </div>
      </div>
      </header> */}

      {/* try */}
      <div className='shadow-md w-full fixed top-0 left-0 z-[9999] lg:px-[15rem] md: bg-black '>
           <div className='md:flex items-center justify-between bg-black py-4 md:px-10 lg:px-15'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src="../../../public/img/Vector.svg" alt=""  className='size-[60px]'/>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-1 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[4rem]' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 cursor-pointer'>
                        <a href={link.link} className='text-white hover:text-haccent duration-500'>{link.name}</a>
                    </li>))
                }
                {/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button> */}
            </ul>
            {/* button */}
           </div>
        </div>
    </>
  )
}

export default Header
