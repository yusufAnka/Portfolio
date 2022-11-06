import React from 'react'
// import './Home.css'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {MdEmail} from "react-icons/md"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/yusufanka/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/yusufAnka' target="_blank"><FaGithub /></a>
        <a href='https://twitter.com/YusufAnka_' target="_blank"><FaTwitter /></a>
        <a href='mailto:yusufanka54@gmail.com' target="_blank"><MdEmail /></a>  

    </div>
  )
}

export default HeaderSocials