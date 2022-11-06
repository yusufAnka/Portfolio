import React from 'react'
import './header.css'
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import Anka from "../../assets/yusuf.jpeg"
import {FaAward} from 'react-icons/fa'

const Header = () => {
  return (
    // <header>
        <section id='about'> 
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={Anka} alt="yusuf" />
                    </div>
                    
                    <h5 className='text-light'>Full-Stack Developer</h5>
                    <CTA />
                    <HeaderSocials />
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working Experience</small>
                        </article>

                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working Experience</small>
                        </article>

                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working Experience</small>
                        </article>

                    </div>
                    <p>
                As a passionate Javascript Engineer with experience in Software
                Engineering, I enjoy implementing light and scalable solutions using
                the best Agile practices for the satisfaction I get by overcoming
                challenges. I am very ﬂexible with different technologies, so I can
                learn and adapt to new environments quickly and build solutions
                around them.
                </p>

                <a href='#contact' className='btn btn-primary'>Hire Me</a>

                </div>

     

            </div>
        </section>
    // </header>
  )
}

export default Header