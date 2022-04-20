import React from 'react'
import logo from './resources/logo.png'
const Nav = () => {
  return (
    <nav>
      <img src={logo} alt='logo' className='logo' />
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Our Services</a>
        </li>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Portfolio</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
