import React from 'react'
import './header.css'
import HeaderButtons from './header_buttons'
import Profile from '../../assets/profile512.png'
import HeaderSocials from './header_socials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hola!! (Hello) , I'm</h3>
        <h1 className='text-light'>Shyam Sundar Vashishtha</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <HeaderButtons/>
        <HeaderSocials/>

        <div className='profile_image'>
          <img src={Profile} alt='profile_image'/>
        </div>

        <a href='#contact' className="scroll_down" rel="noreferrer">Scroll Down</a>
      </div>
    </header>
  )
}

export default header