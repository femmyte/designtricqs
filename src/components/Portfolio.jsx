import React from 'react'
import hero from '../resources/hero.jpg'
import preview from '../resources/preview.jpg'
import rectangle from '../resources/rectangle.png'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h3 className='title'>Our Portfolio </h3>
      <div className='hero'>
        <img src={hero} alt='' className='hero-img' />
        <img src={preview} alt='' className='preview-img' />
      </div>
      <div className='rectangle'>
        <img src={rectangle} alt='' className='rectangle-img' />
      </div>
    </div>
  )
}

export default Portfolio
