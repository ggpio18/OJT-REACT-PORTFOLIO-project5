import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='bg-black w-full'>
      <div className='container w-full'>
        <div className="header__wrapper flex justify-between items-center w-full">
        <div>
          <img src="../../../public/img/Vector.svg" alt=""  className='size-[100px]'/>
        </div>
          <ul className='menu flex items-center gap-5'>
            <li className='active'><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Projects</Link></li>
            <li><Link to="#">Contacts</Link></li>
          </ul>
        </div>
      </div>
      </header>
    </>
  )
}

export default Header
