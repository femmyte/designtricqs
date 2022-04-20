import React from 'react'
import headerImg from './resources/desktop.jpg'
const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row'>
          <article className='column content'>
            <h1>DesignTricqs Is The Silent Ambassador Of Your Brand .</h1>
            <p>
              Design is in everything we make, but it’s also between those
              things. In a very real way, Designtricqs create the human
              enviroment as we create new standards and expectations for all
              digital media including the web.
            </p>
            <button className='hire-btn'>HIRE US</button>
          </article>{' '}
          {/* end of column one */}
          <article className='column header-img-box'>
            {/* <img src={headerImg} alt='header-img' className='header-img' /> */}
          </article>
        </div>
      </div>
    </header>
  )
}

export default Header
