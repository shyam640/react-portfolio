import React from 'react'
import CV from '../../assets/resume.pdf'

const HeaderButtons = () => {
  return (
    <div className="header_buttons">
       <a href={CV} rel='noreferrer' download className="btn">Download Resume</a>
       <a href="#contact" rel='noreferrer' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default HeaderButtons