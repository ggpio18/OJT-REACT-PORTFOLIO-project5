import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='bg-black w-full '>
      <div className='container2 w-full'>
        <div className="header__wrapper flex justify-between items-center w-full">
        <div>
          <img src="../../../public/img/Vector.svg" alt=""  className='size-[100px]'/>
        </div>
          <ul className='menu flex items-center gap-10'>
            <li><Link to="/home">Home</Link></li>
            <li className='transition-all'><a href="#aboutMe" class='transition-all'>About</a></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </div>
      </div>
      </header>
    </>
  )
}

export default Header
