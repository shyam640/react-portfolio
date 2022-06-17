import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const header_socials = () => {
  return (
    <div className="header_socials">
       <a href="https://linkedin.com/in/itsshyam640" rel='noreferrer' target="_blank"><BsLinkedin/></a> 
       <a href="https://github.com/shyam640" rel='noreferrer' target="_blank"><FaGithub/></a> 
       <a href="https://instagram.com/" rel='noreferrer' target="_blank"><FiInstagram/></a> 
    </div>
  )
}

export default header_socials