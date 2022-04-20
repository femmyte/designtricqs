import React from 'react'
import lanre from './resources/lanre.png'
import azeem from './resources/azeem.jpg'

const About = () => {
  return (
    <div className='about'>
      <h2 className='title'>About Us</h2>
      <div className='about_container'>
        <p className='about_text'>
          We are a Team of UI/UX designers with proven experience building
          consumer-facing web products and Software as a service platforms . We
          design UI/UX strategy for companies, enterprise and we also design
          project apps on both web and mobile applications.
        </p>
        <h3 className='sub_title'>Meet The Team</h3>
        <div className='team_container'>
          <div className='team_card'>
            <img src={lanre} alt='' className='team_img' />
            <p className='name'>Alalade Olanrewaju</p>
            <p className='post'>Founder</p>
          </div>
          <div className='team_card'>
            <img src={azeem} alt='' className='team_img' />
            <p className='name'>Aina Azzim</p>
            <p className='post'>Founder</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
