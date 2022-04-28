import React from 'react'
import Card from './Card'
import './Services.css'
const Services = () => {
  return (
    <>
      <div className='services' id='services'>
        <h3 className='title'>Our Services</h3>
        <div className='services_wrapper'>
          <Card
            title={'Web Design'}
            content={
              'Good website design means great impression on your visitor. We can design modern websites which will help you reach your conversion goal.'
            }
          />
          <Card
            title={'Landing Pages'}
            content={
              'Landing pages are great tool for conversions. We can design nice landing pages that increase your conversion rate and maximize your revenue.'
            }
          />
          <Card
            title={'UI/UX Design'}
            content={
              'Mobile apps are now a must for most of businesses. We can design mobile apps that your user will fall in love with.'
            }
          />
          <Card
            title={'Logo Design'}
            content={
              'Logo is most important part of your brand. We can help you set up a proper Logo for your brand.'
            }
          />
        </div>
      </div>
    </>
  )
}

export default Services
