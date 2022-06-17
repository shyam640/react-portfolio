import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="https://www.google.com/search?q=its_shyam640" className='footer_logo'>@its_shyam640</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#cp_analysis'>CP Analysis</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://linkedin.com/in/itsshyam640'><BsLinkedin/></a>
        <a href='https://github.com/shyam640'><FaGithub/></a>
        <a href='https://instagram.com/'><FiInstagram/></a>
        <a href='https://twitter.com/'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; @its_shyam640. All rights reserved.</small>
        <small>   Created with ❤️ by @its_shyam640</small>
      </div>
    </footer>
  )
}

export default footer