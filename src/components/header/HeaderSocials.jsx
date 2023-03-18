import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__Socials'>
        <a href="http://Linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer"> <BsGithub/></a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"> <BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials