import React from 'react'
import './header.css'
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import Anka from "../../assets/yusuf.jpeg"
import {FaAward} from 'react-icons/fa';
import { BiCertification } from 'react-icons/bi';
import { MdCastForEducation } from 'react-icons/md'; 

const Header = () => {
  return (
    // <header>
        <section id='about'> 
            <div className='container about__container'>
                <div className='about__me'>
                    <div>
                        <div className='about__me-image'>
                            <img src={Anka} alt="yusuf" />
                        </div>
                        
                        <h5 className='txt'>Frontend Developer</h5>
                        <CTA />
                        
                    </div>
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
                            <MdCastForEducation className='about__icon'/>
                            <h5>Education</h5>
                            <small>B.Sc Computer Science</small>
                        </article>

                        <article className='about__card'>
                            <BiCertification className='about__icon'/>
                            <h5>Certifications</h5>
                            <small>CCNA | SCRUM | Cyber-Security | Software Engineering</small>
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