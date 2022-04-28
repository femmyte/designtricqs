import React, { useState } from 'react'
import logo from '../resources/logo.png'
import { FaHamburger } from 'react-icons/fa'
import './Nav.css'
import menu from '../resources/menu.png'
const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <img src={logo} alt='logo' className='logo' />
      <img
        src={menu}
        alt=''
        className='menu-icon'
        onClick={() => setOpen((prevState) => !prevState)}
      />
      {/* <FaHamburger className='menu-icon' /> */}
      <div className={open ? 'show nav-menu' : 'nav-menu'}>
        <br />
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#services'>Our Services</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
