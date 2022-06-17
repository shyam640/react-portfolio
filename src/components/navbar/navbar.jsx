import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {FaProjectDiagram} from 'react-icons/fa'
import {VscFeedback} from 'react-icons/vsc'
import {TiContacts} from 'react-icons/ti'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav , setActiveNav] = useState('#');
  return (
    <nav>
      <a title='Home' href='#' onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
      <a title='About' href='#about' onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonLinesFill/></a>
      <a title='Skills' href='#skills' onClick={ () => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active':''}><GiSkills/></a>
      <a title='Projects' href='#projects' onClick={ () => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active':''}><FaProjectDiagram/></a>
      <a title='Testinomials' href='#testinomials' onClick={ () => setActiveNav('#testinomials')} className={activeNav === '#testinomials' ? 'active':''}><VscFeedback/></a>
      <a title='Contact Me' href='#contact' onClick={ () => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><TiContacts/></a>
    </nav>
  )
}

export default Navbar