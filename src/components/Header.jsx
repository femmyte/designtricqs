import React from 'react'

import './Header.css'
const Header = () => {
  return (
    <header className='container'>
      <div className='row'>
        <article className='column'>
          <div className='content'>
            <h1>DesignTricqs Is The Silent Ambassador Of Your Brand .</h1>
            <p>
              Design is in everything we make, but it’s also between those
              things. In a very real way, Designtricqs create the human
              enviroment as we create new standards and expectations for all
              digital media including the web.
            </p>
            <button className='hire-btn'>HIRE US</button>
          </div>
        </article>{' '}
        {/* end of column one */}
        <article className='column'>
          <div className='header-img-box'></div>
        </article>
      </div>
    </header>
  )
}

export default Header
