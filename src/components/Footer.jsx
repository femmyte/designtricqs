import React from 'react'
import logo from '../resources/logo.png'
import { FaLinkedinIn, FaBehance, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logo} alt='logo' className='footer-logo' />
      <p>© Copyright 2022. All right reserved</p>
      <div className='socials'>
        <FaTwitter className='icon' />
        <FaInstagram className='icon' />
        <FaLinkedinIn className='icon' />
        <FaBehance className='icon' />
      </div>
    </footer>
  )
}

export default Footer
