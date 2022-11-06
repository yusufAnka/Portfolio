import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Anka</a>

        <ul className='permalink'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#portfolio'>Projects</a></li>
            <li><a href='#testimonials'>Recommendations</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href='facbook'>Facebook</a>
            <a href='facbook'>Instagram</a>
            <a href='facbook'>Twitter</a>

        </div>
        <div className='footer__copyright'>
            <small>&copy; Yumtech-Innovatives. All right reserved</small>
        </div>

    </footer>
  )
}

export default Footer