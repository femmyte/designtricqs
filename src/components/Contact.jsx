import React from 'react'
import { FaEnvelopeOpen, FaPhone } from 'react-icons/fa'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h3 className='title'>Contact Us</h3>
      <div className='contact_container'>
        <div className='contact-form'>
          <form className='form'>
            <input type='text' className='form-control' />
            <input type='text' className='form-control' />
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='textarea'
            ></textarea>
          </form>
        </div>
        <div className='contact-add'>
          <div className='contact-add-one'>
            <FaEnvelopeOpen className='icon' />
            <p>designtricqs@gmail.com</p>
          </div>
          <div className='contact-add-one'>
            <FaPhone className='icon' />{' '}
            <div className=''>
              <p className='phone'>+2347067800204,</p>
              <p className='phone'>+2348163525515 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
