import React from 'react'

const Card = ({ title, content }) => {
  return (
    <div className='card'>
      <h4 className='card_title'>{title}</h4>
      <p className='card_content'>{content}</p>
    </div>
  )
}

export default Card
